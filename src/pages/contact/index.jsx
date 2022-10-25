import './Contact.css'
import PainelContact from '../../assets/painel-contact.png'
import SvgBehance from '../../assets/svgs-contact/behance.svg'
import SvgGit from '../../assets/svgs-contact/gitsvg.svg'
import SvgLinke from '../../assets/svgs-contact/linkedinsvg.svg'
import Svgemail from '../../assets/svgs-contact/svgemail.svg'
import CircleBg from '../../components/circles'

const cardContact = [
  {
    id: 1,
    src: SvgBehance,
    link: 'https://www.behance.net/alvesxdev',
  },
  {
    id: 2,
    src: SvgGit,
    link: 'https://github.com/alvesxdev',
  },
  {
    id: 3,
    src: SvgLinke,
    link: 'https://www.linkedin.com/in/alves-dev-06bb08188/',
  },
  {
    id: 4,
    src: Svgemail,
    link: 'mailto:henrryfps@gmail.com',
  },
]

const Contact = () => {
  return (
    <>
      <CircleBg />
      <section className="section--contact" id="Contact">
        <div className="content--contact">
          <div className="container--contact">
            <h3>
              &lt;<span>h2</span>&gt;Contact&lt;/<span>h2</span>&gt;
            </h3>
            <h4>My Social Stuff</h4>
            <ul>
              {cardContact.map(({ src, link, id }) => {
                return (
                  <li key={id}>
                    <a href={link} target="_blank" rel="noreferrer">
                      <img src={src} alt="" />
                    </a>
                  </li>
                )
              })}
            </ul>
            <img src={PainelContact} alt="Painel de contato" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
