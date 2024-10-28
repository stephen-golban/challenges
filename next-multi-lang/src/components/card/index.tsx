"use client";

type CustomCardProps = {
  title: string;
  description: string;
};

export function CustomCard({ title, description }: CustomCardProps) {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
