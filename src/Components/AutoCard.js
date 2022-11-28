import React from "react";

export default function AutoCard({isActive, setIsActive}){
function handleActive(e){
  e.preventDefault();

  setIsActive({
    active: true,
    name: e.target.id
  })
}
    return(
        <div id="intro" class="bg-[#3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/MP.svg " alt="SP image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Sumowoi P. Pewu Jr.</h1>
                <small class="text-center block text-md text-gray-800">Tech Enthusiast, Graphic Designer, Bio-Digester Engineer,  &amp; Christian.</small>
                <p class="text-justify text-lg text-gray-800">I am a guy who has passion for Technology, currently, I am studying Information Technology(IT) with concernation in system Administration at the Starz University College of Science and Technology, and hopefull will be obtaining a Bsc degree in 2024.
                Asaid for that, I am also a Graphic Designer as well as a Bio-Digester Engineer ingage in building modern Bio-septic tank for people who desire.</p>
                <div className="p-6 max-w-full mx-auto">
                  <ul className="flex justify-center items-center gap-4">
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#F2F9F1]' } `}>
                      <a href="#educatiion" onClick={handleActive} id="education" className="font-roboto  text-xl">Education</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#F2F9F1]' } `}>
                      <a href="#work" onClick={handleActive} id="work" className="font-roboto  text-xl">Work</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#F2F9F1]' } `}>
                      <a href="#hobbies" onClick={handleActive} id="hobbies" className="font-roboto  text-xl">Hobbies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
}