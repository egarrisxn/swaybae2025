import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary hover:underline-offset-4 hover:underline",
        icon: "bg-background border shadow-md shadow-[hsla(0,0%,0%,.3)] drop-shadow transition-all duration-200 ease-in-out rounded-3xl border-foreground/20 dark:bg-slate-800/80 hover:bg-slate-100 hover:shadow-[rgba(0,0,0,..5)] dark:shadow-[rgba(175,230,255,0.1)] dark:hover:bg-slate-700/80 dark:hover:shadow-slate-100/30",
        shimmer:
          "rounded-3xl border-none bg-gradient-to-br from-[#0075ff] via-[#00bfff] to-[#0075ff] bg-[length:280%_auto] text-white shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-100 hover:bg-[right_top] focus:shadow-[0_0_0_3px_white,0_0_0_6px_#0075ff] focus:outline-none",
        main: "border-2 duration-200 ml-[-2px] rounded-3xl text-black bg-white uppercase leading-relaxed transition-all active:translate-x-[0.07rem] active:translate-y-[0.07rem] shadow-[3px_3.5px_0px_black] hover:shadow-[1px_1px_0px_black,-1.5px_-1.5px_0px_black] active:shadow-[0px_0px_0px_black] dark:shadow-[2px_3px_0px_#a9a9a9] dark:hover:shadow-[1px_1.5px_0px_#a9a9a9] dark:active:shadow-[0px_0px_0px_#a9a9a9]",
        // other: 'bg-white text-black shadow-md hover:bg-primary hover:text-accent-foreground border-input md:text-sm rounded-3xl uppercase leading-relaxed',
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9 rounded-full",
        squareicon: "size-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
