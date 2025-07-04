import * as React from "react";

export function Avatar({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
      {children}
    </div>
  );
}

export function AvatarImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      className="w-8 h-8 rounded-full object-cover"
      alt="avatar"
    />
  );
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold">
      {children}
    </span>
  );
}
