import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-2xl p-8 lg:p-10 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
