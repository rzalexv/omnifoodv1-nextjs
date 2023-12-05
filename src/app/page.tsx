import Image from "next/image";
import Link from "next/link";
import { City, Feature, Gallery, Pricing, Step, Testimonial } from "@/components";
import { CITIES, FEATURES, PRICING, TESTIMONIALS } from "@/data";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="pb-16 pt-32 max-w-[1920px] mx-auto bg-[url('/assets/img/hero.jpg')] bg-fixed bg-cover bg-center text-white bg-black/80 bg-blend-color xl:h-[600px] md:pt-40 md:pb-24 lg:pt-52 lg:pb-36">
          <div className="container">
            <h1 className="mb-8 heading heading-primary">
              Goodbye junk food.
              <br />
              Hello super healthy meals.
            </h1>
            <div className="flex gap-6">
              <Link href="#" className="btn btn-primary">
                I&apos;m hungry
              </Link>
              <Link href="#" className="btn btn-ghost">
                Show me more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="features">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-10 heading heading-secondary">Get Food fast &mdash; not fast food</h2>

            <p className="sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto text-lg lg:text-xl">Hello, we&apos;re Omnifood, your new premium food delivery service. We know you&apos;re always busy. No time for cooking. So let us take care of that, we&apos;re really good at it, we promise!</p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-4 ">
            {FEATURES.map((feature, index) => (
              <Feature feature={feature} key={index} />
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <section className="py-16 bg-neutral-100" id="how-it-work">
        <div className="container">
          <h2 className="mb-16 heading heading-secondary">How it works &mdash; Simple as 1, 2, 3</h2>

          <div className="grid gap-y-8 sm:grid-cols-2 md:items-center lg:mx-auto xl:gap-20 2xl:gap-24">
            <Image src="/assets/img/app-iPhone.png" alt="" width={613} height={1255} className="w-1/2 max-w-[160px] md:w-[60%] md:max-w-[250px] mx-auto xl:mx-0 xl:justify-self-end" />

            <div className="max-w-[360px] mx-auto md:max-w-[460px] xl:max-w-[560px] xl:mx-0">
              <div className="grid gap-4 mb-8 md:mb-12 md:gap-6 xl:gap-8">
                <Step position={1} description="Choose the subscription plan that best fits your needs and sign up today." />
                <Step position={2} description="Order your delicious meal using our mobile app or website. Or you can even call us!" />
                <Step position={3} description="Enjoy your meal after less than 20 minutes. See you the next time!" />
              </div>

              <div className="flex items-center justify-center gap-8 lg:justify-start lg:gap-12">
                <Image src="/assets/img/download-app.svg" alt="apple" width={178} height={53} className="w-auto h-9 sm:h-10" />
                <Image src="/assets/img/download-app-android.svg" alt="android" width={178} height={53} className="w-auto h-9 sm:h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="cities">
        <div className="container">
          <h2 className="mb-16 heading heading-secondary">We&apos;re currently in these cities</h2>

          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CITIES.map((city, index) => (
              <City city={city} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1920px] mx-auto bg-[url('/assets/img/back-customers.jpg')] bg-fixed bg-cover bg-center text-white bg-black/80 bg-blend-color">
          <div className="container relative py-16">
            <h2 className="mb-16 heading heading-secondary">Our customers can&apos;t live without us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 2xl:w-[85%] 2xl:mx-auto sm:gap-y-20">
              {TESTIMONIALS.map((testimonial, index) => (
                <Testimonial testimonial={testimonial} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100" id="sign-up">
        <div className="container">
          <h2 className="mb-16 heading heading-secondary">Start eating healthy today</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:mx-auto 2xl:w-[85%]">
            {PRICING.map((item, index) => (
              <Pricing pricing={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="contact">
        <div className="container">
          <h2 className="mb-16 heading heading-secondary">We&apos;re happy to hear from you</h2>
          <form className="sm:w-[80%] sm:mx-auto xl:w-[60%] 2xl:w-1/2">
            <div className="grid gap-2 sm:grid-cols-[1fr_2fr] sm:items-center mb-6">
              <label htmlFor="name" className="md:text-lg lg:text-xl">
                Name
              </label>
              <input type="text" id="name" className="block w-full px-4 py-2 border rounded-md placeholder:text-neutral-400 placeholder:tracking-wider placeholder:text-sm" placeholder="Your name" />
            </div>

            <div className="grid gap-2 sm:grid-cols-[1fr_2fr] sm:items-center mb-6">
              <label htmlFor="email" className="">
                Email
              </label>
              <input type="email" id="email" className="block w-full px-4 py-2 border rounded-md placeholder:text-neutral-400 placeholder:tracking-wider placeholder:text-sm" placeholder="Your email" />
            </div>

            <div className="grid gap-2 sm:grid-cols-[1fr_2fr] sm:items-center mb-6">
              <label htmlFor="find-us" className="">
                How did you find us?
              </label>
              <select id="find-us" className="block w-full px-4 py-2 border rounded-md placeholder:text-neutral-400 placeholder:tracking-wider placeholder:text-sm">
                <option value="friends">Friends</option>
                <option value="search">Search Engine</option>
                <option value="ad">Advertisement</option>
                <option value="other">Friends</option>
              </select>
            </div>

            <div className="grid gap-2 sm:grid-cols-[1fr_2fr] sm:items-center mb-6">
              <label htmlFor="news" className="">
                Newsletter
              </label>
              <div className="flex items-center gap-4">
                <input type="checkbox" id="news" className="" />
                <label htmlFor="news" className="">
                  Yes, please
                </label>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-[1fr_2fr] sm:items-center mb-6">
              <label htmlFor="message" className="">
                Drop us a line
              </label>
              <textarea id="message" rows={5} className="block w-full px-4 py-2 border rounded-md resize-none placeholder:text-neutral-400 placeholder:tracking-wider placeholder:text-sm"></textarea>
            </div>

            <div className="flex justify-center">
              <input type="submit" value="Send it!" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
