
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      // Configure EmailJS with your service ID, template ID and user ID
      // You need to sign up on emailjs.com and create these
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: "Hitarth",
        to_email: "hitarththakkar0212@gmail.com",
        subject: values.subject || "Contact Form Submission",
        message: values.message,
      };

      await emailjs.send(
        'service_cvz4xp1', // Replace with your EmailJS service ID
        'template_wbt90cm', // Replace with your EmailJS template ID
        templateParams,
        'OtP5q0bKr9W50fldD' // Replace with your EmailJS user ID (public key)
      );

      // Reset form
      form.reset();

      // Show success message
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent successfully. I will get back to you soon.',
      });

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error sending email:', error);

      // Show error message
      setFormStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again later.',
      });

      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-portfolio-dark-purple">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Get In <span className="text-portfolio-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">
              Let's Talk
            </h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind or just want to say hello? Feel free to reach out!
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-portfolio-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <a
                    href="https://www.google.com/maps?q=Ahmedabad,+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300"
                  >
                    Ahmedabad, Gujarat
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-portfolio-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:hitarththakkar0212@gmail.com" className="text-gray-300">
                    hitarththakkar0212@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-portfolio-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href="tel:+919228607722" className="text-gray-300">
                    (+91) 92286 07722
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/hitarth-thakkar/" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <div>
                <h4 className="text-white font-medium mb-1">LinkedIN</h4>
                <p className="text-gray-300"><a href="https://www.linkedin.com/in/hitarth-thakkar/">in/hitarth-thakkar/</a></p>
              </div>
            </div>

            <br></br>

            <div className="flex space-x-4">
              <a href="https://github.com/HitarthThakkar" className="h-10 w-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <div>
                <h4 className="text-white font-medium mb-1">GitHub</h4>
                <p className="text-gray-300"><a href="https://github.com/HitarthThakkar">@HitarthThakkar</a></p>
              </div>
            </div>
          </div>

          <div className="bg-portfolio-dark p-6 rounded-lg shadow-lg">
            {formStatus.type && (
              <Alert
                variant={formStatus.type === 'success' ? "default" : "destructive"}
                className={`mb-4 ${formStatus.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-500' : ''}`}
              >
                {formStatus.type === 'success' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertTitle>
                  {formStatus.type === 'success' ? 'Success' : 'Error'}
                </AlertTitle>
                <AlertDescription>
                  {formStatus.message}
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-white bg-portfolio-dark-purple border-portfolio-primary/30 focus:border-portfolio-primary"
                          placeholder="Your name"
                        />
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
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="text-white bg-portfolio-dark-purple border-portfolio-primary/30 focus:border-portfolio-primary"
                          placeholder="Your email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-white bg-portfolio-dark-purple border-portfolio-primary/30 focus:border-portfolio-primary"
                          placeholder="Subject"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="text-white bg-portfolio-dark-purple border-portfolio-primary/30 focus:border-portfolio-primary min-h-[150px]"
                          placeholder="Your message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-portfolio-primary hover:bg-portfolio-accent text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


/*
ownh poaf vwtl djax 
gysk oyxi huut eksf
*/