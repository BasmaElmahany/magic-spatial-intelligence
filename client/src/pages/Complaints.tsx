import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Send, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Complaints() {
  const { t, language, dir } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success(t('complaints.success'));
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              {language === 'ar' ? 'الاتصال و الدعم' : 'Contact & Support'}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'نحن نقدر ملاحظاتكم. الرجاء إرسال الشكاوى أو المقترحات أو الاستفسارات، وسيقوم فريقنا بمساعدتكم في أسرع وقت.'
                : 'We value your feedback. Please send complaints, suggestions, or inquiries, and our team will assist you as soon as possible.'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl"></div>

              ```
              <h3 className="text-2xl font-bold mb-6 relative z-10">
                {language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium opacity-80 text-sm mb-1">{language === 'ar' ? 'زورونا' : 'Visit Us'}</div>
                    <div className="font-bold"> {language === "ar"
                      ? "أبو فليو - بجانب محكمة الأسرة بندر المنيا، مركز المنيا، محافظة المنيا"
                      : "Abo Flio - Besides Family Court Bandar El Menia , Minya Center , Al Minya Governate"}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium opacity-80 text-sm mb-1">{language === 'ar' ? 'راسلونا عبر البريد الإلكتروني' : 'Email Us'}</div>
                    <div className="font-bold">magic@minya.gov.eg</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium opacity-80 text-sm mb-1">{language === 'ar' ? 'اتصل بنا' : 'Call Us'}</div>
                    <div className="font-bold">+201505613674</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
              </h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'السبت - الجمعة' : 'Sat - Fri'}</span>
                  <span className="font-medium text-slate-900">{language === 'ar' ? 'على مدار اليوم' : 'All Day'} </span>

                </div>

              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    {language === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    {language === 'ar'
                      ? 'املأ النموذج أدناه وسنقوم بالرد عليك.'
                      : 'Fill out the form below and we will get back to you.'}
                  </p>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">
                            {t('complaints.name') || (language === 'ar' ? 'الاسم' : 'Name')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={language === 'ar' ? 'ادخل الاسم' : 'Enter Your Name'} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
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
                          <FormLabel className="text-slate-700 font-medium">
                            {t('complaints.email') || (language === 'ar' ? 'البريد الإلكتروني' : 'Email')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={language === 'ar' ? 'john@example.com' : 'john@example.com'} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">
                            {t('complaints.phone') || (language === 'ar' ? 'رقم الهاتف' : 'Phone Number')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={language === 'ar' ? '+20 123 456 7890' : '+20 123 456 7890'} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
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
                          <FormLabel className="text-slate-700 font-medium">
                            {t('complaints.subject') || (language === 'ar' ? 'موضوع الرسالة' : 'Subject')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={language === 'ar' ? 'موضوع الشكوى' : 'Subject of your message'} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('complaints.message') || (language === 'ar' ? 'نص الرسالة' : 'Message')}
                        </FormLabel>
                        <FormControl>
                          <Textarea placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'} {...field} className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 rounded-xl resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]">
                    {t('complaints.submit') || (language === 'ar' ? 'إرسال' : 'Submit')} <Send className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        ```

      </div>
    </div>

  );
}
