
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Clock, User, Phone, Mail, Stethoscope, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { getWhatsAppUrl } from '@/config/whatsappConfig';

const AppointmentForm = ({ services = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!phoneRegex.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile format';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.service) newErrors.service = 'Service selection is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) setErrors(prev => ({ ...prev, service: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

   const message = `\u{1F3E5} *Premium Appointment Request*

\u{1F464} *Name:* ${formData.name}
\u{1F4F1} *Mobile:* ${formData.mobile}
\u{1F4E7} *Email:* ${formData.email || 'Not provided'}
\u{1F4C5} *Date:* ${formData.date}
\u{1F551} *Time:* ${formData.time}
\u{1FA7A} *Service:* ${formData.service}
\u{1F4AC} *Message:* ${formData.message || 'None'}

Please confirm my appointment.`;
console.log(message);
console.log(getWhatsAppUrl(message));

    window.open(getWhatsAppUrl(message), '_blank');
    
    toast.success('Redirecting to WhatsApp to complete your booking.', {
      description: 'Your details have been pre-filled.'
    });

    setFormData({
      name: '', mobile: '', email: '', date: '', time: '', service: '', message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-primary" /> Full Name *
          </label>
          <Input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Jane Doe" 
            className={`bg-background/50 backdrop-blur-sm border-border/50 ${errors.name ? 'border-destructive' : ''}`}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" /> Mobile Number *
          </label>
          <Input 
            name="mobile" 
            type="tel" 
            value={formData.mobile} 
            onChange={handleChange} 
            placeholder="+91 98765 43210"
            className={`bg-background/50 backdrop-blur-sm border-border/50 ${errors.mobile ? 'border-destructive' : ''}`}
          />
          {errors.mobile && <p className="text-xs text-destructive">{errors.mobile}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" /> Email Address
        </label>
        <Input 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="jane@example.com"
          className={`bg-background/50 backdrop-blur-sm border-border/50 ${errors.email ? 'border-destructive' : ''}`}
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary" /> Preferred Date *
          </label>
          <Input 
            name="date" 
            type="date" 
            value={formData.date} 
            onChange={handleChange}
            className={`bg-background/50 backdrop-blur-sm border-border/50 ${errors.date ? 'border-destructive' : ''}`}
          />
          {errors.date && <p className="text-xs text-destructive">{errors.date}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" /> Preferred Time *
          </label>
          <Input 
            name="time" 
            type="time" 
            value={formData.time} 
            onChange={handleChange}
            className={`bg-background/50 backdrop-blur-sm border-border/50 ${errors.time ? 'border-destructive' : ''}`}
          />
          {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-primary" /> Required Service *
        </label>
        <Select value={formData.service} onValueChange={handleSelectChange}>
          <SelectTrigger className={`bg-background/50 backdrop-blur-sm border-border/50 ${errors.service ? 'border-destructive' : ''}`}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service, idx) => (
              <SelectItem key={idx} value={service.title || service}>{service.title || service}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary" /> Message
        </label>
        <Textarea 
          name="message" 
          rows={3} 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Any specific symptoms or concerns..."
          className="bg-background/50 backdrop-blur-sm border-border/50 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full h-14 text-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
        Submit Appointment Request
      </Button>
    </form>
  );
};

export default AppointmentForm;
