
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const SuccessStoryCard = ({ title, challenge, approach, outcome }) => {
  return (
    <div className="group h-[400px] perspective-1000 w-full cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        
        {/* Front of Card */}
        <Card className="absolute inset-0 backface-hidden bg-card border-border/40 shadow-lg flex flex-col justify-center items-center p-8 text-center glass-card">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4 font-serif leading-snug">{title}</h3>
          <div className="mt-8 flex items-center text-sm font-medium text-primary">
            View Case Details <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </Card>

        {/* Back of Card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-primary border-transparent shadow-xl flex flex-col p-6 text-primary-foreground overflow-y-auto">
          <h3 className="text-xl font-bold mb-6 font-serif border-b border-primary-foreground/20 pb-4">{title}</h3>
          
          <div className="space-y-4 flex-1">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-1">Challenge</h4>
              <p className="text-sm leading-relaxed">{challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-1">Approach</h4>
              <p className="text-sm leading-relaxed">{approach}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">Outcome</h4>
              <p className="text-sm leading-relaxed font-medium">{outcome}</p>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default SuccessStoryCard;
