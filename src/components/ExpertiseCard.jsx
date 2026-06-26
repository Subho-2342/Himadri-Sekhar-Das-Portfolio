
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ExpertiseCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="group h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="pt-6 flex flex-col items-center text-center h-full">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ExpertiseCard;
