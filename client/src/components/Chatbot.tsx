import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t('chatbot.welcome'),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Predefined responses based on keywords
    const lowerMessage = userMessage.toLowerCase();
    
    const responses: { [key: string]: { en: string; ar: string } } = {
      centers: {
        en: 'MAGIC has 6 specialized centers: 1) Facilities Network & Surveying, 2) Remote Sensing Applications, 3) Spatial Information Infrastructure, 4) Innovation & AI, 5) IT & Software, 6) Capacity Building. Which center would you like to know more about?',
        ar: 'يضم مجمع ماجيك 6 مراكز متخصصة: 1) مركز شبكات المرافق والرفع المساحي، 2) مركز الاستشعار عن بعد، 3) مركز البنية المعلوماتية المكانية، 4) مركز الابتكار والذكاء الاصطناعي، 5) مركز تكنولوجيا المعلومات، 6) مركز إعداد الكوادر. أي مركز تريد معرفة المزيد عنه؟'
      },
      services: {
        en: 'We offer comprehensive services including: Surveying (building permits, elevation determination), GIS & Spatial Analysis, Remote Sensing, AI Solutions, IT Services, and Training Programs. What service are you interested in?',
        ar: 'نقدم خدمات شاملة تشمل: الرفع المساحي (تراخيص المباني، تحديد المنسوب)، نظم المعلومات الجغرافية، الاستشعار عن بعد، حلول الذكاء الاصطناعي، خدمات تكنولوجيا المعلومات، وبرامج التدريب. ما الخدمة التي تهتم بها؟'
      },
      training: {
        en: 'Our Capacity Building Center offers specialized training in GIS, programming, and emerging technologies. We also have Mekano Labs for youth education in AI, IoT, and Electronics. Would you like to know about our training programs?',
        ar: 'يقدم مركز إعداد الكوادر تدريباً متخصصاً في نظم المعلومات الجغرافية والبرمجة والتقنيات الناشئة. لدينا أيضاً مكانو لابز لتعليم الشباب في الذكاء الاصطناعي وإنترنت الأشياء والإلكترونيات. هل تريد معرفة المزيد عن برامجنا التدريبية؟'
      },
      contact: {
        en: 'You can reach us at Minya Governorate, Egypt. For specific inquiries, please visit our Contact page or submit a complaint through our Complaints section.',
        ar: 'يمكنك التواصل معنا في محافظة المنيا، مصر. للاستفسارات المحددة، يرجى زيارة صفحة التواصل أو تقديم شكوى من خلال قسم الشكاوى.'
      },
      surveying: {
        en: 'Our surveying services include: building permits surveying (36M+ works), elevation determination (44M+ works), utilities detection (2.8M+ works), and sanitation connections (20M+ works). We use advanced technologies for high-precision results.',
        ar: 'تشمل خدمات الرفع المساحي: رفع تراخيص المباني (36 مليون+ عمل)، تحديد المنسوب (44 مليون+ عمل)، الكشف عن المرافق (2.8 مليون+ عمل)، ووصلات الصرف الصحي (20 مليون+ عمل). نستخدم تقنيات متقدمة لنتائج عالية الدقة.'
      },
      ai: {
        en: 'Our Innovation & AI Center focuses on adopting the latest AI technologies for smart services, research & development, and digital transformation. We organize workshops and conferences to showcase cutting-edge applications.',
        ar: 'يركز مركز الابتكار والذكاء الاصطناعي على تبني أحدث تقنيات الذكاء الاصطناعي للخدمات الذكية والبحث والتطوير والتحول الرقمي. ننظم ورش عمل ومؤتمرات لعرض التطبيقات المتطورة.'
      },
      vision: {
        en: 'Our vision is to be a leading center for innovation and technology in spatial data at the republic level within five years, by integrating the latest technologies in geographic surveying, AI, and IT to support sustainable planning and comprehensive development.',
        ar: 'رؤيتنا أن نكون مركزاً رائداً للابتكار والتكنولوجيا في البيانات المكانية على مستوى الجمهورية خلال خمس سنوات، من خلال دمج أحدث التقنيات في المسح الجغرافي والذكاء الاصطناعي وتكنولوجيا المعلومات لدعم التخطيط المستدام والتنمية الشاملة.'
      }
    };

    // Check for keywords
    if (lowerMessage.includes('center') || lowerMessage.includes('مركز') || lowerMessage.includes('مراكز')) {
      return responses.centers[language];
    } else if (lowerMessage.includes('service') || lowerMessage.includes('خدم')) {
      return responses.services[language];
    } else if (lowerMessage.includes('train') || lowerMessage.includes('تدريب') || lowerMessage.includes('mekano')) {
      return responses.training[language];
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('تواصل') || lowerMessage.includes('اتصال')) {
      return responses.contact[language];
    } else if (lowerMessage.includes('survey') || lowerMessage.includes('رفع') || lowerMessage.includes('مساح')) {
      return responses.surveying[language];
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('ذكاء') || lowerMessage.includes('artificial')) {
      return responses.ai[language];
    } else if (lowerMessage.includes('vision') || lowerMessage.includes('رؤية')) {
      return responses.vision[language];
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('مرحبا') || lowerMessage.includes('السلام')) {
      return language === 'ar' 
        ? 'مرحباً! أنا مساعد ماجيك الذكي. كيف يمكنني مساعدتك اليوم؟ يمكنني الإجابة عن أسئلتك حول المراكز، الخدمات، التدريب، والمزيد.'
        : 'Hello! I\'m MAGIC\'s AI assistant. How can I help you today? I can answer questions about our centers, services, training, and more.';
    } else {
      return language === 'ar'
        ? 'شكراً لسؤالك! يمكنني مساعدتك في معرفة المزيد عن مراكزنا، خدماتنا، برامج التدريب، أو كيفية التواصل معنا. ما الذي تود معرفته؟'
        : 'Thank you for your question! I can help you learn more about our centers, services, training programs, or how to contact us. What would you like to know?';
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(async () => {
      const response = await getAIResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl border-2 border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{t('chatbot.title')}</h3>
                    <p className="text-blue-100 text-xs">{language === 'ar' ? 'متصل' : 'Online'}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 bg-slate-50 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                          : 'bg-white text-slate-900 border border-slate-200'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                        {message.timestamp.toLocaleTimeString(language === 'ar' ? 'ar-EG' : 'en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-slate-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-slate-200">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('chatbot.placeholder')}
                    className="flex-1 border-2 border-slate-200 focus:border-blue-500"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
