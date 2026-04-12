import React from 'react';
import { motion } from 'motion/react';

interface PhotoCardProps {
  label: string;
  color: string;
  onClick?: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ label, color, onClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group aspect-square ${color}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-heading font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {label}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <span className="text-white font-ui font-medium text-sm">
          {label}
        </span>
      </div>
    </motion.div>
  );
};
