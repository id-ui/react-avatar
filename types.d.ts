import * as React from 'react';

export interface AvatarProps {
    /**
     * Image source
     */
    src?: string;
     /**
     * Default image source (fallback src)
     */
     defaultSrc?: string;
     /**
     * Avatar className
     */
     className?: string;
     /**
     * Avatar size
      * @default 4rem
     */
     size?: string;
     /**
     * Text shown if no src or an error occurred (used if specified otherwise defaultSrc will be used)
     */
     initials?: string;
     /**
     * Avatar backgroundColor (used with initials)
      * @default #9552D4
     */
     color?: string;
}

export default class Avatar extends React.Component<AvatarProps> {}