import React, {useState} from "react";
export default function AutoCard(){
  const[isActive, setIsActive] =useState({
    active: true,
    name: "education"
  })
    return(
        <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/MP.svg " alt="SP image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Sumowoi P. Pewu, Jr.</h1>
                <small class="text-center block text-md text-gray-800">Graphic Designer, Teacher,  &amp; Bio-Digester Engineer </small>
                <p class="text-justify text-lg text-gray-800">I am Sumowoi P. Pewu, Jr. A Bsc candidate in Information Technology at the Starz University College of Science and Technology  with concernation in system Administration pending 2024.
                I am a Graphic Designer and also a Bio-Digester Engineer engage in building modern Bio septic tank for people who desire.</p>
                <div className="p-6 max-w-full mx-auto">
                  <ul className="flex justify-center items-center gap-4">
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]' } `}>
                      <a href="" id="education" className="font-roboto font-bold text-xl text-[#E7EFF3]">Education</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]' } `}>
                      <a href="" id="work" className="font-roboto  text-xl">Work</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]' } `}>
                      <a href="" id="hobbies" className="font-roboto  text-xl">Hobbies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
}