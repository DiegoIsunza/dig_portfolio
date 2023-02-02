import React from 'react';
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.linkedin.com/in/diego-isunza-8b961b1b7/" target="_blank" rel="noreferer">
            <BsLinkedin/>
          </a>
        </div>
        <div>
          <a href="https://github.com/DiegoIsunza" target="_blank" rel="noreferer">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/isunza_diego" target="_blank" rel="noreferer">
            <BsTwitter/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia