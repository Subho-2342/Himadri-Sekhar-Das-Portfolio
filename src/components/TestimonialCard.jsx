
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ rating = 5, text, patientIdentifier, treatmentType }) => {
  return (
    <Card className="h-full flex flex-col bg-card border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden mx-2">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full" />
      
      <CardContent className="pt-10 px-8 pb-8 flex flex-col h-full relative z-10">
        <Quote className="w-10 h-10 text-primary/20 mb-6" />
        
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'fill-accent text-accent' : 'text-muted'
              }`}
            />
          ))}
        </div>
        
        <p className="text-foreground/80 leading-relaxed text-lg mb-8 flex-1 italic font-serif">
          "{text}"
        </p>
        
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold tracking-wider">
            {patientIdentifier}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Verified Patient</p>
            {treatmentType && (
              <p className="text-xs text-muted-foreground">{treatmentType}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
