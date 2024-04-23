import { FiCommand, FiZap } from 'react-icons/fi'
import BoxTechnologies from './components/BoxTech/BoxTechnologies'
import Button from './components/Buttons/Button'
import { MdDesignServices } from 'react-icons/md'

function App() {
  return (
    <>
      <header className="lg:flex justify-around h-[9rem] items-center hidden">
        <div>
          <img src="" />
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
      </header>
      <div className="lg:grid lg:grid-cols-2 items-center mb-16">
        <div className="lg:p-6 p-2 pb-6 lg:w-[32rem] lg:ms-16 flex flex-col items-start gap-5">
          <h1 className="text-3xl">Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ad.
            Placeat a quas libero alias error provident ipsum itaque porro?
          </p>
          <Button title="View Projects" link="/#" />
        </div>

        <div className="flex justify-center lg:justify-start">
          <img src="src/assets/profile.png" alt="" />
        </div>
      </div>

      <section className="bg-whiteBg lg:h-screen flex justify-center">
        <div className="p-6 flex flex-col box-border lg:w-2/3 gap-8 ">
          <span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </span>

          <span className="lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-5 items-start">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quaerat sunt a nostrum suscipit .
              </p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <Button title="Something" link="/#" />
            </div>
            <div></div>
          </span>

          <span className="flex flex-col lg:flex-row justify-center gap-5">
            <BoxTechnologies
              icon={<MdDesignServices size={26} />}
              title="Cool Desing"
              desc="Lorem ipsum dolor sit amet."
            />
            <BoxTechnologies
              icon={<FiCommand size={26} />}
              title="Technical Excellence"
              desc="Lorem ipsum dolor sit amet."
            />
            <BoxTechnologies
              icon={<FiZap size={26} />}
              title="User-Centric Approach"
              desc="Lorem ipsum dolor sit amet."
            />
          </span>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[70vh] bg-black p-8 border-1 border-black">
          <div className="grid justify-center relative">
            <img src="src/assets/profile.png" alt="" />
          </div>
          <div className="text-white">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in
              rem, deserunt vel consequuntur similique dolor quia consequatur
              dolorum dignissimos.
            </h2>
          </div>
        </div>
      </section>

      <section className="lg:h-screen static overflow-hidden">
        <div className="relative -top-20 bottom-2 h-60 min-w-[cal(100% + 500px)] rotate-[6deg] -z-10 bg-black"></div>
      </section>
    </>
  )
}

export default App
