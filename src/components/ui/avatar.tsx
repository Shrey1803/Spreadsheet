import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ className, children, ...props }) => (
  <div className={`rounded-full overflow-hidden ${className ?? ''}`} {...props}>
    {children}
  </div>
);

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage: React.FC<AvatarImageProps> = ({ className, ...props }) => (
  <img className={className} {...props} />
);
