"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { SendIcon } from "../icons";

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="ml-[-5] w-full max-w-xs md:max-w-md"
      >
        <div className="relative">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-3xl border bg-white py-3 pl-6 pr-16 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm dark:bg-black"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-4"
            aria-label="Subscribe to newsletter"
          >
            <SendIcon className="size-5 text-foreground/70 hover:text-foreground" />
          </button>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ fieldState }) =>
            fieldState.error ? (
              <p className="mt-1 pl-1 text-sm text-red-500">
                {fieldState.error.message}
              </p>
            ) : null
          }
        />
      </form>
    </Form>
  );
}

// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { toast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   // FormLabel,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const FormSchema = z.object({
//   email: z.string().email({ message: "Invalid email address." }),
// });

// export function SubscribeForm() {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       email: "",
//     },
//   });

//   async function onSubmit(data) {
//     try {
//       const response = await fetch("/api/newsletter", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to submit your email: ${response.status}`);
//       }

//       toast({
//         title: "Message sent!",
//         description: "Success! You have subscribed.",
//       });

//       form.reset();
//     } catch (error) {
//       toast({
//         title: "Error",
//         description:
//           "There was an error submitting your email. Please try again.",
//         variant: "destructive",
//       });
//       console.error(error);
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-60">
//         <div className="flex items-center justify-center gap-1">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem className="w-full">
//                 {/* <FormLabel className="sr-only">Email</FormLabel> */}
//                 <FormControl>
//                   <Input type="email" placeholder="Email Address" {...field} />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//           <Button
//             size="sm"
//             variant="other"
//             type="submit"
//             className="flex-shrink-0"
//           >
//             Subscribe
//           </Button>
//         </div>
//         <div className="flex items-center justify-center">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ fieldState }) =>
//               fieldState.error ? (
//                 <p className="text-sm text-red-500">
//                   {fieldState.error.message}
//                 </p>
//               ) : null
//             }
//           />
//         </div>
//       </form>
//     </Form>
//   );
// }
