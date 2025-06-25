import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {  useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const schema = z.object({
  full_name: z
    .string({ required_error: "Full name is required" })
    .nonempty({ message: "Full name is required" }),
  email: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password cannot be less than 4 characters" }),
});

export function SignInForm({ className, ...props }) {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    navigate("/dashboard");
  };
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-start bg-background h-screen pt-12",
        className
      )}
      {...props}
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create Account</CardTitle>
          <CardTitle className="text-xl">Welcome to event planner app</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Signin
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?
                    <a href="/login" className="underline underline-offset-4">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
