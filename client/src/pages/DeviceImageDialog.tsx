import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function DeviceImageDialog({
  thumbnail,
  full,
  alt,
  children,
}: {
  thumbnail: string;
  full: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.img
          src={thumbnail}
          alt={alt}
          className="w-full h-40 object-contain cursor-zoom-in transition duration-300 group-hover:scale-105"
          whileHover={{ scale: 1.03 }}
        />
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden rounded-xl">
        <motion.img
          src={full}
          alt={alt}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-auto object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
