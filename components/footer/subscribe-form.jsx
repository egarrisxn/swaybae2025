"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendHorizontalIcon } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export function SubscribeForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit your email: ${response.status}`);
      }

      toast({
        title: "Message sent!",
        description: "Success! You have subscribed.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error submitting your email. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-72">
        <div className="flex items-center justify-center gap-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel className="sr-only">Email</FormLabel> */}
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            size="squareicon"
            variant="shimmer"
            type="submit"
            className="flex-shrink-0"
          >
            <SendHorizontalIcon className="size-4" />
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <FormField
            control={form.control}
            name="email"
            render={({ fieldState }) =>
              fieldState.error ? (
                <p className="text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              ) : null
            }
          />
        </div>
      </form>
    </Form>
  );
}
