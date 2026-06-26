
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

const ScheduleCard = ({ day, timing, isAvailable = true }) => {
  return (
    <Card className={`transition-all duration-300 ${isAvailable ? 'bg-card hover:shadow-md' : 'bg-muted/50'}`}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isAvailable ? 'bg-primary/10' : 'bg-muted'}`}>
              <Calendar className={`w-5 h-5 ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{day}</h4>
              {isAvailable ? (
                <div className="flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{timing}</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-1">Closed</p>
              )}
            </div>
          </div>
          {isAvailable && (
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
