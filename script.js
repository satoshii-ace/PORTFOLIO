document.addEventListener('DOMContentLoaded', function() {
    // Check if particles container exists
    if(document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#379634" }, /* Your Primary Color */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#379634",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4, /* Speed of movement */
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }, /* Mouse grab effect */
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});


const burger = document.querySelector('.burger');
const nav = document.querySelector('.header')
burger.addEventListener('click', () => {
  nav.classList.toggle('navbar-active');
})

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('navbar-active');
  });
});
     
      
const themeToggle = document.getElementById('theme-icon');
const root = document.documentElement;

function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassedThisYear) {
    age--;
  }

  return age;
}

const ageElement = document.getElementById('user-age');
if (ageElement) {
  const birthDate = '2006-04-30';
  ageElement.textContent = calculateAge(birthDate);
}

if (root.classList.contains('light-mode')) {
  themeToggle.classList.remove('bxs-sun');
  themeToggle.classList.add('bxs-moon');
} else {
  themeToggle.classList.remove('bxs-moon');
  themeToggle.classList.add('bxs-sun');
}

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light-mode');
  
  if(root.classList.contains('light-mode')) {
    themeToggle.classList.remove('bxs-sun');
    themeToggle.classList.add('bxs-moon');
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.classList.remove('bxs-moon');
    themeToggle.classList.add('bxs-sun');
    localStorage.setItem('theme', 'dark');
  }
});


/* ---------- Terminal hero: ASCII art + typing animation ---------- */
const ASCII_PROFILE_DEFAULT = `                       :........
                     :..  ...   ..
                     :..=+++++=- .
                     ..+#+++*++*-
                     --#*-=**--*+:
                     ++##******#*+*
                     +*#%#+==+##++
                       ****=++*+
                       ****==++=
                   :.:=##**++**+.
               -=:::.:-=**+++*+-.....
              =--::..::::-----::::..:::.
             ==-::::.:--::::::--::..:::--
             ==-:..:::------:::-:::.:::--
            -==-::...:-::::::::---:.:::---
            ==---::..:::::::::::::.:::----
           ==---:::    ..:.:.:::. .::-----
          :::::::::.:::::......    ::::::-:
          . =*=-::.:****++==-:::...::--+= .
            *#+===-==-::-==++++++++++++*+
            +*+=====-=---::-----=====+++=
             =--:::::::::::......::::--=
               : ....              .
               . .....  ....... ....
              -. .............. .:..
              . ..... . . ..........
              . ......     .......::.
             .  ......       ....:::.
             .  ....... .     .......
            ..  ........ .       ....
            .   ......    .      .....
           ..   ....                ..
            .   .........   ..      .
               ..
                                  ..
              @*+=------          ..
              @@@@@@@@@@         ..
              @@%@%%%%@%         ..
              %@%%%%%%@@         ..
               ......:-%         ..`;

const ASCII_PROFILE_ALT = `                          ::
                      :..    ..:
                    :.....::.. ..
                    :..+++++++=..
                    ..+*==**==*=
                    ==##+=#*==*+=
                    +*#%**++*##*+*
                     **##+==+**++
                       ****++++
                      *****++*+
                  :::-*#***+***:..
              --::::::-=+****=-::.....
             ==-:.:.::-:=#+++::-::-:::::
            =+-:.: .:::-***+-----:::-:-:
            ==-:....:::+*++:::-----:..:..
           =-=-:...:.-*++-:::::---::....:
           ==+-:.. .=*===:::::::-:..... +@
          +-==-:. :++===.::..:-..... .. :=
          :::-::-=*+-==..:::..:. ... .. .::
             ++=++--=-.  .:.  .. ......  .
             +++=---: .  ...  .. .. .:=+
              ++--:  ..  ....  .. ...:==
               :::   ..  ....  .. ...:==
                 :. ...  ....  .. ...:==
                .-  ..   ..... ... ..:==
                .:  ..    ...  ... ..:==
                :.  ..      .  .... .-==
               ::.  ..      .    ....-=
               ::  ..            ....-==
               ..  ..             ...-=
               ..  ..              ..-=-
              .:.  ..              ..:=
              .:. ..          .      .
              ...... ..     .....
                                   .
               %::.               ..
               @@@%%###%#         ..
               @@%@%@@%@@         ..
               %@%%%@@@@%         .
                =::--==#@         .`;

(function() {
  const terminalWindow = document.querySelector('.terminal-window');
  const logEl = document.getElementById('terminalLog');
  const bodyEl = document.getElementById('terminalBody');
  const asciiEl = document.getElementById('asciiArt');

  if (!terminalWindow || !logEl || !asciiEl || !bodyEl) return;

  // Each step types a command in the running log, then reveals the
  // matching content block (already in the DOM, just hidden) below it.
  const SCRIPT = [
    { command: 'whoami', blockId: 'blockWhoami' },
    { command: 'type intro.txt', blockId: 'blockIntro', onReveal: () => window.startRoleTyping && window.startRoleTyping() },
    { command: 'dir actions', blockId: 'blockActions' },
    { command: 'dir socials', blockId: 'blockSocials' },
    { command: 'render_profile.bat', blockId: 'blockAscii', ascii: true }
  ];

  const TYPE_SPEED = 42;
  const LINE_PAUSE = 300;
  const BLOCK_PAUSE = 300;
  const ASCII_ROW_DELAY = 13;

  function appendPromptLine() {
    const line = document.createElement('div');
    line.className = 'term-line';
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = 'C:\\Users\\ashley>';
    line.appendChild(prompt);
    const typed = document.createElement('span');
    typed.className = 'cmd-text';
    line.appendChild(typed);
    logEl.appendChild(line);
    return typed;
  }

  function typeText(el, text, speed) {
    return new Promise((resolve) => {
      let i = 0;
      (function step() {
        if (i <= text.length) {
          el.textContent = text.slice(0, i);
          i++;
          setTimeout(step, speed);
        } else {
          resolve();
        }
      })();
    });
  }

  function revealBlock(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');
    el.classList.add('appear');
  }

  function revealAscii(text) {
    return new Promise((resolve) => {
      asciiEl.textContent = '';
      const rows = text.split('\n');
      let i = 0;
      (function step() {
        if (i < rows.length) {
          asciiEl.textContent += (i === 0 ? '' : '\n') + rows[i];
          i++;
          setTimeout(step, ASCII_ROW_DELAY);
        } else {
          resolve();
        }
      })();
    });
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function scrollToBottom() {
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  async function runScript() {
    for (const step of SCRIPT) {
      const typed = appendPromptLine();
      await typeText(typed, step.command, TYPE_SPEED);
      scrollToBottom();
      await wait(LINE_PAUSE);

      revealBlock(step.blockId);
      scrollToBottom();

      if (step.ascii) {
        await revealAscii(ASCII_PROFILE_DEFAULT);
      }
      if (step.onReveal) {
        try { step.onReveal(); } catch (err) { /* non-fatal, e.g. Typed.js not yet loaded */ }
      }

      scrollToBottom();
      await wait(BLOCK_PAUSE);
    }
  }

  function startWhenVisible() {
    if (!('IntersectionObserver' in window)) {
      runScript();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runScript();
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(terminalWindow);
  }

  startWhenVisible();

  let showingAlt = false;
  const asciiBlock = document.getElementById('blockAscii');
  asciiBlock.addEventListener('mouseenter', () => {
    if (asciiEl.textContent.trim() === '' || showingAlt) return;
    asciiEl.textContent = ASCII_PROFILE_ALT;
    showingAlt = true;
  });

  asciiBlock.addEventListener('mouseleave', () => {
    if (!showingAlt) return;
    asciiEl.textContent = ASCII_PROFILE_DEFAULT;
    showingAlt = false;
  });

  // Window control buttons: playful, non-destructive interactions.
  const minBtn = document.querySelector('.win-min');
  const maxBtn = document.querySelector('.win-max');
  const closeBtn = document.querySelector('.win-close');

  if (minBtn) minBtn.addEventListener('click', () => {
    terminalWindow.classList.toggle('win-minimized');
  });
  if (maxBtn) maxBtn.addEventListener('click', () => {
    terminalWindow.classList.toggle('win-maximized');
  });
  if (closeBtn) closeBtn.addEventListener('click', () => {
    terminalWindow.classList.add('win-closing');
    setTimeout(() => terminalWindow.classList.remove('win-closing', 'win-minimized', 'win-maximized'), 900);
  });
})();


const aboutImg = document.querySelector('.about-img img');
const origSrc = 'assets/about.png';
const hovSrc = 'assets/about2.png';

document.querySelector('.about-img').addEventListener('mouseenter', () => {
  aboutImg.src = hovSrc;
});

document.querySelector('.about-img').addEventListener('mouseleave', () => {
  aboutImg.src = origSrc;
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      loadingSpinner.style.display = 'block';
      formMessage.textContent = '';
      formMessage.className = 'form-message';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formMessage.textContent = 'Thank you! Your message has been sent successfully.';
          formMessage.className = 'form-message success';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formMessage.textContent = 'Oops! There was a problem sending your message. Please try again or contact me directly.';
        formMessage.className = 'form-message error';
        console.error('Form submission error:', error);
      } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        loadingSpinner.style.display = 'none';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});