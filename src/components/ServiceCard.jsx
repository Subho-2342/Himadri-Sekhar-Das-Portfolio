
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, onLearnMore }) => {
  return (
    <Card className="group relative overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card border-border/40">
      {/* Premium Hover Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      
      <CardHeader className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
        </div>
        <CardTitle className="text-2xl font-semibold text-foreground tracking-tight">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
          {description}
        </p>
        
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="flex items-center text-sm font-semibold text-primary group/btn w-fit"
          >
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Learn More</span>
              <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-secondary">Learn More</span>
            </span>
            <ArrowRight className="ml-2 w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-secondary" />
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
