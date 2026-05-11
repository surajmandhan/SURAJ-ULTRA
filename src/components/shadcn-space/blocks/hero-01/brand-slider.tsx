"use client";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "motion/react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-px w-32 bg-linear-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-800 opacity-50" />
                <p className="text-sm font-normal sm:px-2 px-10 text-muted-foreground text-center">
                  Loved by 1000+ big and small brands around the worlds
                </p>
                <div className="hidden md:block h-px w-32 bg-linear-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-800 opacity-50" />
              </div>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="[--duration:20s] p-0" repeat={3}>
                  {brandList.map((brand, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-36 h-8 mx-8 lg:mx-12 dark:hidden object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <img
                        src={brand.lightimg}
                        alt={brand.name}
                        className="hidden dark:block w-36 h-8 mx-8 lg:mx-12 object-contain grayscale invert hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
