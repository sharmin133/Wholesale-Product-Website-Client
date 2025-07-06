import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

const SuccessStory = () => {
  const stories = [
    {
      name: "Sumaiya Rahman",
      quote:
        "The platform gives me access to trusted wholesalers without any hassle. It’s my go-to for sourcing quality products.",
    },
    {
      name: "Simi Jannat",
      quote:
        "Managing my retail shop has become much easier since I started ordering here. Everything is so organized and efficient.",
    },
    {
      name: "Farhan Rahman",
      quote:
        "Thanks to PrimeGo, I was able to stock my shop quickly and at a great price. Their product variety and easy ordering system make all the difference.",
    },
  ];

  return (
    <div className=" ">
      <Fade direction="up" cascade>
         <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-500 dark:text-emerald-700 p-4">
          Success Stories
          </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white shadow-md border-t-4 border-pink-400 rounded-2xl px-6 py-8 max-w-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <BiSolidQuoteAltLeft size={40} className="text-green-500" />
                <p className="text-gray-700 text-lg italic">“{story.quote}”</p>
                <h3 className="text-xl font-semibold text-amber-600 mt-4">
                  — {story.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default SuccessStory;
