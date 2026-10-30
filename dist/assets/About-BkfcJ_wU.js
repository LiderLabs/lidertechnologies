import{_ as e,a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./index-C9ilfYAB.js";import{t as p}from"./client-logo-4-CeD0G1KN.js";var m=e(i(),1),h=f(),g=`
  M195 0
  C195 70 160 105 165 165
  C170 225 230 255 225 320
  C220 390 165 430 170 495
  C175 540 205 565 195 580
`,_=`
  M384 0
  C384 70 330 110 335 170
  C340 235 430 265 425 330
  C420 395 335 440 340 500
  C345 545 395 565 384 580
`,v=`
  M820 0
  C790 85 720 115 675 175
  C625 245 645 320 700 380
  C750 435 720 505 640 580
`;function y({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,className:a,opacity:o}){return(0,h.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:a,children:[(0,h.jsx)(`defs`,{children:(0,h.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,h.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,h.jsxs)(`feMerge`,{children:[(0,h.jsx)(`feMergeNode`,{in:`blur`}),(0,h.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,h.jsx)(`path`,{d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.035`,vectorEffect:`non-scaling-stroke`}),(0,h.jsx)(`path`,{ref:t,d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:o,vectorEffect:`non-scaling-stroke`}),(0,h.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`10`,fill:`currentColor`,opacity:`0.13`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function b(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),r=(0,m.useRef)(null),i=(0,m.useRef)(null),a=(0,m.useRef)(null),s=(0,m.useRef)(null),c=(0,m.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let l=n.querySelector(`.about-hero-label`),u=n.querySelector(`.about-hero-heading`),d=n.querySelector(`.about-hero-copy`),f=n.querySelector(`.about-hero-glow-left`),p=n.querySelector(`.about-hero-glow-right`),m=window.innerWidth,h=m<768,g=m>=768&&m<1024,_=m>=1024;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){o.set([l,u,d,f,p],{x:0,y:0,scale:1,autoAlpha:1}),o.set([r.current,a.current,c.current],{autoAlpha:0});return}o.set(l,{y:14,scale:.96,autoAlpha:0}),o.set(u,{y:h?32:g?36:42,autoAlpha:0}),o.set(d,{y:h?20:24,autoAlpha:0}),o.set(f,{x:h?-18:-35,y:-15,scale:.82,autoAlpha:0}),o.set(p,{x:h?18:35,y:20,scale:.84,autoAlpha:0}),o.timeline({defaults:{ease:`power3.out`}}).to(f,{x:0,y:0,scale:1,autoAlpha:1,duration:h?1:1.4},0).to(p,{x:0,y:0,scale:1,autoAlpha:1,duration:h?1.05:1.5},.05).to(l,{y:0,scale:1,autoAlpha:1,duration:.45},.1).to(u,{y:0,autoAlpha:1,duration:h?.75:.9},.2).to(d,{y:0,autoAlpha:1,duration:h?.6:.7},.42);let v=null,y=null;h&&(v=t.current,y=r.current),g&&(v=i.current,y=a.current),_&&(v=s.current,y=c.current),v&&y&&(o.to(v,{strokeDashoffset:_?-130:-110,duration:_?8:7,repeat:-1,ease:`none`}),o.set(y,{scale:.8,autoAlpha:0,transformOrigin:`50% 50%`}),o.timeline({delay:h?.3:.45}).to(y,{scale:1,autoAlpha:1,duration:.22,ease:`power2.out`}).to(y,{motionPath:{path:v,align:v,alignOrigin:[.5,.5],start:0,end:1},duration:h?2.2:g?2.4:2.6,ease:`power1.inOut`},0).to(y,{scale:1.3,duration:.12,ease:`power2.out`},h?1.95:2.3).to(y,{scale:1,duration:.15,ease:`power2.inOut`},h?2.07:2.42)),o.to(f,{x:h?8:18,y:h?6:10,duration:6,repeat:-1,yoyo:!0,ease:`sine.inOut`}),o.to(p,{x:h?-8:-16,y:h?-6:-10,duration:7,repeat:-1,yoyo:!0,ease:`sine.inOut`})},{scope:e}),(0,h.jsxs)(`section`,{ref:e,className:`
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#eef8fb_0%,#f7fbfc_45%,#ffffff_100%)]
        px-4
        py-16
        sm:px-6
        sm:py-18
        md:px-8
        md:py-20
        lg:px-10
        lg:py-24
      `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
          about-hero-glow-left
          pointer-events-none
          absolute
          -left-30
          top-10
          size-90
          rounded-full
          bg-brand-cyan/[0.07]
          blur-[90px]
        `}),(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
          about-hero-glow-right
          pointer-events-none
          absolute
          -right-25
          top-20
          size-105
          rounded-full
          bg-brand-primary/[0.06]
          blur-[110px]
        `}),(0,h.jsx)(y,{path:g,pathRef:t,dotRef:r,viewBox:`0 0 390 580`,filterId:`about-mobile-signal-glow`,opacity:.2,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,h.jsx)(y,{path:_,pathRef:i,dotRef:a,viewBox:`0 0 768 580`,filterId:`about-tablet-signal-glow`,opacity:.21,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,h.jsx)(y,{path:v,pathRef:s,dotRef:c,viewBox:`0 0 1280 580`,filterId:`about-desktop-signal-glow`,opacity:.22,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,h.jsxs)(`div`,{className:`
          relative
          z-10
          mx-auto
          max-w-[980px]
          text-center
        `,children:[(0,h.jsx)(`div`,{className:`
            about-hero-label
            inline-flex
            rounded-full
            bg-brand-primary-light
            px-3
            py-1.5
          `,children:(0,h.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-primary`,children:`About`})}),(0,h.jsx)(`h1`,{className:`
            about-hero-heading
            mx-auto
            mt-5
            max-w-[900px]
            text-[38px]
            font-bold
            leading-[1]
            tracking-[-0.045em]
            text-brand-ink
            min-[390px]:text-[42px]
            sm:text-[46px]
            md:text-[52px]
            lg:text-[58px]
          `,children:`We build the technology that African systems run on.`}),(0,h.jsx)(`p`,{className:`
            about-hero-copy
            mx-auto
            mt-5
            max-w-[700px]
            text-[13px]
            leading-6
            text-brand-muted
            sm:mt-6
            sm:text-[14px]
            sm:leading-7
            md:text-[15px]
          `,children:`From education to health and many more... we build software that companies thrive on... we build software that empowers businesses.`})]})]})}var x=[{title:`Purpose-Driven Solutions`,description:`Aligning technology with your core business objectives to unlock exponential value and operational clarity.`,icon:(0,h.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-4`,"aria-hidden":`true`,children:(0,h.jsx)(`path`,{d:`m13 3-7 10h5l-1 8 8-11h-5V3Z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})},{title:`Tailored Technology`,description:`Custom-built architectures designed strictly for your specific operational scale, security requirements, and regulatory needs.`,icon:(0,h.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-4`,"aria-hidden":`true`,children:(0,h.jsx)(`path`,{d:`m9 7-5 5 5 5M15 7l5 5-5 5M13.5 5l-3 14`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})},{title:`Scalable & Future-Ready`,description:`Resilient cloud-native systems that grow seamlessly alongside your enterprise roadmap without breaking down.`,icon:(0,h.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-4`,"aria-hidden":`true`,children:(0,h.jsx)(`path`,{d:`M5 18V7M5 18h14M8 14l3-3 3 1 4-5`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})},{title:`End-to-End Expertise`,description:`From initial product discovery through development, infrastructure deployment, and continuous ongoing maintenance.`,icon:(0,h.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-4`,"aria-hidden":`true`,children:[(0,h.jsx)(`rect`,{x:`5`,y:`9`,width:`6`,height:`7`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.6`}),(0,h.jsx)(`rect`,{x:`13`,y:`5`,width:`6`,height:`7`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.6`}),(0,h.jsx)(`path`,{d:`M11 12h2M8 9V7h5`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`})]})},{title:`Strong Partnership Approach`,description:`We embed deeply as an extension of your internal team, guaranteeing radical transparency and shared accountability.`,icon:(0,h.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-4`,"aria-hidden":`true`,children:[(0,h.jsx)(`path`,{d:`M8 12 11 9c1-1 2.5-1 3.5 0l1 1M16 12l-3 3c-1 1-2.5 1-3.5 0l-1-1`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`}),(0,h.jsx)(`path`,{d:`m7 9-2 2a3 3 0 0 0 0 4l1 1M17 15l2-2a3 3 0 0 0 0-4l-1-1`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`})]})},{title:`Mission-Critical Velocity`,description:`Rigorous agile delivery loops delivering verifiable business value, bulletproof automated tests, and uninterrupted delivery.`,icon:(0,h.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-4`,"aria-hidden":`true`,children:(0,h.jsx)(`path`,{d:`M7 16h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.8 3.2 3.2 0 0 0 7 16Z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}],S=`
  M195 0
  C195 95 155 145 165 225
  C175 310 235 350 225 435
  C215 525 160 575 170 665
  C180 755 215 805 195 840
`,C=`
  M384 0
  C384 95 325 145 335 225
  C345 310 450 350 440 440
  C430 530 325 580 340 670
  C355 755 415 810 384 840
`,w=`
  M640 0
  C640 95 715 125 760 190
  C820 275 770 350 665 405
  C555 465 520 565 585 650
  C620 700 640 760 640 840
`;function T({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,h.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,h.jsx)(`defs`,{children:(0,h.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,h.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,h.jsxs)(`feMerge`,{children:[(0,h.jsx)(`feMergeNode`,{in:`blur`}),(0,h.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,h.jsx)(`path`,{d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.035`,vectorEffect:`non-scaling-stroke`}),(0,h.jsx)(`path`,{ref:t,d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,h.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`10`,fill:`currentColor`,opacity:`0.14`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function E(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),r=(0,m.useRef)(null),i=(0,m.useRef)(null),a=(0,m.useRef)(null),s=(0,m.useRef)(null),c=(0,m.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let l=o.matchMedia();return l.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:l,tablet:u,desktop:d,reduceMotion:f}=e.conditions,p=n.querySelector(`.about-who-label`),m=n.querySelector(`.about-who-heading`),h=n.querySelector(`.about-who-copy`),g=n.querySelector(`.about-capability-label`),_=o.utils.toArray(`.about-capability-card`),v=[],y=(e,t,n={})=>{if(!e)return;let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&(t(),r.disconnect())},n);r.observe(e),v.push(r)};if(f){o.set([p,m,h,g,_,`.about-capability-icon`],{x:0,y:0,scale:1,rotate:0,autoAlpha:1}),o.set(`.about-card-sheen`,{autoAlpha:0}),o.set([r.current,a.current,c.current],{autoAlpha:0});return}o.set(p,{y:14,autoAlpha:0}),o.set(m,{y:d?36:28,autoAlpha:0}),o.set(h,{y:22,autoAlpha:0}),o.set(g,{y:14,autoAlpha:0}),y(p,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(p,{y:0,autoAlpha:1,duration:.42}).to(m,{y:0,autoAlpha:1,duration:.72},`-=0.22`).to(h,{y:0,autoAlpha:1,duration:.62},`-=0.42`).to(g,{y:0,autoAlpha:1,duration:.4},`-=0.18`)},{threshold:l?.08:.12,rootMargin:l?`0px 0px -4% 0px`:`0px 0px -6% 0px`});let b=null,x=null;if(l&&(b=t.current,x=r.current),u&&(b=i.current,x=a.current),d&&(b=s.current,x=c.current),b&&x&&(o.to(b,{strokeDashoffset:d?-150:-120,duration:d?8:7,repeat:-1,ease:`none`}),o.set(x,{autoAlpha:1,scale:d?.88:.8,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:d?`top 76%`:u?`top 88%`:`top 92%`,end:d?`bottom 28%`:u?`bottom 18%`:`bottom 10%`,scrub:d?.6:u?.8:.7,invalidateOnRefresh:!0}}).to(x,{motionPath:{path:b,align:b,alignOrigin:[.5,.5],start:0,end:1},duration:1,ease:`none`},0).to(x,{scale:d?1.35:1.15,duration:.06,ease:`power2.out`},.91).to(x,{scale:.9,duration:.08},.97)),!d)return _.forEach((e,t)=>{let n=e.querySelector(`.about-capability-icon`),r=e.querySelector(`.about-card-sheen`),i=l||t%2==0?-1:1;o.set(e,{x:l?0:i*18,y:30,scale:.975,autoAlpha:0}),o.set(n,{scale:.7,rotate:i*-6,autoAlpha:0}),o.set(r,{xPercent:-130,autoAlpha:0}),y(e,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(e,{x:0,y:0,scale:1,autoAlpha:1,duration:.6}).to(n,{scale:1,rotate:0,autoAlpha:1,duration:.42,ease:`back.out(1.7)`},`-=0.38`).to(r,{xPercent:130,autoAlpha:1,duration:.75,ease:`power2.inOut`},`-=0.35`).to(r,{autoAlpha:0,duration:.2},`-=0.18`)},{threshold:u?.12:.08,rootMargin:u?`0px 0px -7% 0px`:`0px 0px -4% 0px`})}),()=>{v.forEach(e=>{e.disconnect()})};_.forEach((e,t)=>{let n=t%3,r=n===0?-28:n===2?28:0,i=e.querySelector(`.about-capability-icon`),a=e.querySelector(`.about-card-sheen`);o.set(e,{x:r,y:42,scale:.965,autoAlpha:0}),o.set(i,{scale:.7,rotate:-6,autoAlpha:0}),o.set(a,{xPercent:-135,autoAlpha:0})});let S=o.timeline({scrollTrigger:{trigger:n,start:`top 72%`,end:`bottom 32%`,scrub:.62,invalidateOnRefresh:!0}}),C=[.18,.28,.38,.52,.62,.72];return _.forEach((e,t)=>{let n=C[t],r=e.querySelector(`.about-capability-icon`),i=e.querySelector(`.about-card-sheen`);S.to(e,{x:0,y:0,scale:1,autoAlpha:1,duration:.14,ease:`power2.out`},n),r&&S.to(r,{scale:1.12,rotate:0,autoAlpha:1,duration:.09,ease:`back.out(1.8)`},n+.02).to(r,{scale:1,duration:.07},n+.1),i&&S.to(i,{xPercent:130,autoAlpha:1,duration:.16,ease:`power1.inOut`},n+.03).to(i,{autoAlpha:0,duration:.08},n+.15),S.to(e,{boxShadow:`0 18px 45px rgba(16,146,191,0.10)`,duration:.08},n+.03).to(e,{boxShadow:`0 8px 28px rgba(15,35,55,0.06)`,duration:.12},n+.14)}),()=>{v.forEach(e=>{e.disconnect()})}}),()=>{l.revert()}},{scope:e}),(0,h.jsxs)(`section`,{ref:e,className:`
        relative
        overflow-hidden
        bg-white
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:px-8
        lg:px-10
        lg:py-24
      `,children:[(0,h.jsx)(T,{path:S,pathRef:t,dotRef:r,viewBox:`0 0 390 840`,filterId:`about-who-mobile-glow`,opacity:.18,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,h.jsx)(T,{path:C,pathRef:i,dotRef:a,viewBox:`0 0 768 840`,filterId:`about-who-tablet-glow`,opacity:.19,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,h.jsx)(T,{path:w,pathRef:s,dotRef:c,viewBox:`0 0 1280 840`,filterId:`about-who-desktop-glow`,opacity:.2,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,h.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[1280px]`,children:[(0,h.jsxs)(`div`,{className:`max-w-[820px]`,children:[(0,h.jsx)(`div`,{className:`
              about-who-label
              inline-flex
              rounded-full
              bg-brand-primary-light
              px-3
              py-1.5
            `,children:(0,h.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-primary`,children:`Who We Are`})}),(0,h.jsx)(`h2`,{className:`
              about-who-heading
              mt-4
              max-w-[760px]
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-brand-ink
              sm:text-[32px]
              md:text-[36px]
              lg:text-[40px]
            `,children:`Driving Digital Transformation with Passion and Expertise`}),(0,h.jsxs)(`div`,{className:`
              about-who-copy
              mt-5
              max-w-[830px]
              space-y-4
              sm:mt-6
            `,children:[(0,h.jsx)(`p`,{className:`text-[13px] leading-6 text-brand-muted sm:text-[14px] sm:leading-7 md:text-[15px]`,children:`Lider Technologies is a premier team of expert developers, architects, and innovators. We are committed to delivering high-quality software solutions that don't just meet requirements but redefine what's possible for our clients.`}),(0,h.jsx)(`p`,{className:`text-[13px] leading-6 text-brand-muted sm:text-[14px] sm:leading-7 md:text-[15px]`,children:`Our approach combines deep technical proficiency with a genuine passion for problem-solving, ensuring that every line of code we write contributes to your long-term digital success across the African continent and beyond.`})]})]}),(0,h.jsx)(`p`,{className:`
            about-capability-label
            mt-12
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-brand-muted
            sm:mt-14
          `,children:`What Sets Us Apart`}),(0,h.jsx)(`div`,{className:`
            mt-5
            grid
            gap-3
            sm:mt-6
            sm:gap-4
            md:grid-cols-2
            lg:grid-cols-3
          `,children:x.map(e=>(0,h.jsxs)(`article`,{className:`
                about-capability-card
                group
                relative
                flex
                min-h-50
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-brand-border-light
                bg-white
                p-5
                shadow-brand-card
                transition-[transform,border-color,box-shadow]
                duration-300
                hover:-translate-y-1
                hover:border-brand-primary/15
                hover:shadow-[0_14px_35px_rgba(15,35,55,0.08)]
                sm:p-6
              `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
                  about-card-sheen
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-1/2
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-brand-cyan/[0.08]
                  to-transparent
                `}),(0,h.jsxs)(`div`,{className:`relative z-10`,children:[(0,h.jsx)(`div`,{className:`
                    about-capability-icon
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-brand-primary-light
                    text-brand-primary
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  `,children:e.icon}),(0,h.jsx)(`h3`,{className:`mt-5 text-[15px] font-semibold leading-6 text-brand-ink sm:mt-6 md:text-[16px]`,children:e.title}),(0,h.jsx)(`p`,{className:`mt-3 text-[13px] leading-6 text-brand-muted md:text-[14px]`,children:e.description})]})]},e.title))})]})]})}function D(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),i=(0,m.useRef)(null),a=(0,m.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let r=o.matchMedia();return r.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:r,tablet:s,desktop:c,reduceMotion:l}=e.conditions,u=n.querySelector(`.careers-card`),d=n.querySelector(`.careers-label`),f=n.querySelector(`.careers-heading`),p=n.querySelector(`.careers-copy`),m=n.querySelector(`.careers-actions`),h=n.querySelector(`.careers-glow-left`),g=n.querySelector(`.careers-glow-right`);if(l){o.set([u,d,f,p,m,h,g],{x:0,y:0,scale:1,autoAlpha:1}),o.set(i.current,{scaleY:1}),o.set(a.current,{scale:1,autoAlpha:1}),o.set(t.current,{autoAlpha:0});return}o.set(u,{y:r?42:36,scale:r?.965:.98,autoAlpha:0,transformOrigin:`50% 50%`}),o.set(d,{y:14,scale:.95,autoAlpha:0}),o.set(f,{y:r?34:28,autoAlpha:0}),o.set(p,{y:22,autoAlpha:0}),o.set(m,{y:22,scale:.97,autoAlpha:0}),o.set(h,{x:-20,scale:.8,autoAlpha:0}),o.set(g,{x:20,scale:.82,autoAlpha:0}),o.set(t.current,{y:0,scale:r?.95:.86,autoAlpha:1,transformOrigin:`50% 50%`}),o.set(i.current,{scaleY:0,transformOrigin:`top center`}),o.set(a.current,{scale:.45,autoAlpha:0,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:r?`top 82%`:s?`top 74%`:`top 66%`,toggleActions:`play none none reverse`,invalidateOnRefresh:!0},defaults:{ease:`power3.out`}}).to(h,{x:0,scale:1,autoAlpha:1,duration:.9},0).to(g,{x:0,scale:1,autoAlpha:1,duration:1},0).to(u,{y:0,scale:1,autoAlpha:1,duration:r?.68:.72},.05).to(d,{y:0,scale:1,autoAlpha:1,duration:.42},.22).to(f,{y:0,autoAlpha:1,duration:r?.64:.68},.3).to(p,{y:0,autoAlpha:1,duration:.54},.42).to(m,{y:0,scale:1,autoAlpha:1,duration:.48},.5);let _=c?96:s?80:64;o.timeline({scrollTrigger:{trigger:n,start:r?`top 91%`:s?`top 84%`:`top 76%`,end:r?`top 64%`:s?`top 56%`:`top 40%`,scrub:r?.65:s?.58:.5,invalidateOnRefresh:!0}}).to(t.current,{y:_,duration:.7,ease:`none`},0).to(i.current,{scaleY:1,duration:.7,ease:`none`},0).to(t.current,{scale:r?1.65:1.45,duration:.08,ease:`power2.out`},.72).to(a.current,{scale:1,autoAlpha:1,duration:.12,ease:`back.out(2)`},.74).to(a.current,{scale:r?1.55:1.38,duration:.08,ease:`power2.out`},.86).to(a.current,{scale:1,duration:.12,ease:`power2.inOut`},.94).to(t.current,{scale:.6,autoAlpha:0,duration:.08},.91),o.to(h,{x:r?8:14,y:r?5:8,duration:6,repeat:-1,yoyo:!0,ease:`sine.inOut`}),o.to(g,{x:r?-8:-14,y:r?-5:-8,duration:7,repeat:-1,yoyo:!0,ease:`sine.inOut`})}),()=>{r.revert()}},{scope:e}),(0,h.jsxs)(`section`,{ref:e,id:`careers`,className:`
        relative
        scroll-mt-[90px]
        overflow-hidden
        bg-white
        px-4
        pb-14
        pt-16
        sm:px-6
        sm:pb-16
        sm:pt-20
        md:px-8
        md:py-20
        lg:px-10
        lg:py-24
      `,children:[(0,h.jsxs)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[1]
          h-16
          -translate-x-1/2
          sm:h-20
          lg:h-24
        `,children:[(0,h.jsx)(`div`,{className:`
            absolute
            left-1/2
            top-0
            h-full
            -translate-x-1/2
            border-l-2
            border-dashed
            border-brand-cyan/30
          `}),(0,h.jsx)(`div`,{ref:i,className:`
            absolute
            left-1/2
            top-0
            h-full
            w-0.5
            -translate-x-1/2
            origin-top
            bg-brand-cyan
          `}),(0,h.jsx)(`div`,{ref:t,className:`
            absolute
            left-1/2
            top-0
            size-3.5
            -translate-x-1/2
            rounded-full
            bg-brand-cyan
            shadow-[0_0_0_7px_rgba(16,146,191,0.12),0_0_24px_rgba(16,146,191,0.48)]
          `,children:(0,h.jsx)(`span`,{className:`
              absolute
              left-1/2
              top-1/2
              size-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
            `})})]}),(0,h.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[1180px]`,children:[(0,h.jsx)(`div`,{ref:a,"aria-hidden":`true`,className:`
            absolute
            left-1/2
            top-0
            z-20
            flex
            size-5
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-brand-cyan/50
            bg-white
            shadow-[0_0_0_7px_rgba(16,146,191,0.10),0_0_26px_rgba(16,146,191,0.30)]
          `,children:(0,h.jsx)(`span`,{className:`size-2 rounded-full bg-brand-cyan`})}),(0,h.jsxs)(`div`,{className:`
            careers-card
            relative
            overflow-hidden
            rounded-[24px]
            bg-gradient-to-r
            from-brand-primary
            to-brand-navy
            px-5
            py-12
            text-center
            shadow-[0_18px_45px_rgba(0,45,51,0.18)]
            sm:px-6
            sm:py-14
            md:px-10
            lg:px-14
            lg:py-16
          `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
              careers-glow-left
              pointer-events-none
              absolute
              -left-20
              -top-20
              size-64
              rounded-full
              bg-brand-cyan/12
              blur-3xl
            `}),(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
              careers-glow-right
              pointer-events-none
              absolute
              -bottom-24
              -right-16
              size-72
              rounded-full
              bg-white/5
              blur-3xl
            `}),(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-56
              w-[420px]
              max-w-full
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand-cyan/10
              blur-[80px]
            `}),(0,h.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[780px]`,children:[(0,h.jsx)(`div`,{className:`
                careers-label
                inline-flex
                rounded-full
                bg-white/10
                px-3
                py-1.5
              `,children:(0,h.jsx)(`span`,{className:`
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white/75
                `,children:`Careers at Lider`})}),(0,h.jsx)(`h2`,{className:`
                careers-heading
                mx-auto
                mt-5
                max-w-[700px]
                text-[32px]
                font-bold
                leading-[1.02]
                tracking-[-0.04em]
                text-white
                min-[390px]:text-[34px]
                sm:text-[38px]
                md:text-[42px]
                lg:text-[44px]
              `,children:`Join Our Team: Build the Future With Us`}),(0,h.jsx)(`p`,{className:`
                careers-copy
                mx-auto
                mt-5
                max-w-[660px]
                text-[13px]
                leading-6
                text-white/75
                md:text-[14px]
              `,children:`We are always looking for visionary engineers, system architects, and designers to build transformative digital infrastructure across the continent.`}),(0,h.jsxs)(`div`,{className:`
                careers-actions
                mt-8
                flex
                flex-col
                items-stretch
                justify-center
                gap-3
                min-[420px]:flex-row
                min-[420px]:flex-wrap
                min-[420px]:items-center
              `,children:[(0,h.jsx)(r,{to:`/contact`,className:`
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-brand-navy
                  px-6
                  py-3
                  text-[12px]
                  font-semibold
                  text-white
                  transition-[transform,box-shadow]
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-brand-primary
                `,children:`View Open Positions`}),(0,h.jsx)(r,{to:`/contact`,className:`
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  px-6
                  py-3
                  text-[12px]
                  font-semibold
                  text-white
                  transition-[transform,background-color]
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-white/15
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-brand-primary
                `,children:`Send Open Application`})]})]})]})]})]})}var O=[{number:`01`,title:`Understand Before We Build`,description:`We begin by understanding the business problem, the people affected by it, and the operational realities the solution needs to support.`},{number:`02`,title:`Engineer for Reliability`,description:`We build systems with maintainability, security, performance, and resilience considered from the beginning rather than added later.`},{number:`03`,title:`Design for Growth`,description:`Our software is structured to evolve with changing requirements, increasing users, new integrations, and expanding business operations.`},{number:`04`,title:`Stay Accountable`,description:`We work collaboratively, communicate clearly, and remain accountable from the first conversation through delivery and continued support.`}],k=`
  M195 0
  C195 90 150 130 160 205
  C170 280 230 320 220 395
  C210 470 165 515 175 590
  C185 665 220 720 195 760
`,A=`
  M384 0
  C384 90 310 135 325 210
  C340 285 455 320 445 400
  C435 480 325 520 340 595
  C355 675 420 720 384 760
`,j=`
  M640 0
  C545 65 390 80 320 160
  C270 220 430 280 640 275
  C820 270 980 280 965 360
  C945 445 720 455 505 465
  C355 475 300 525 380 565
  C470 610 560 610 640 640
`;function M({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,h.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,h.jsx)(`defs`,{children:(0,h.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,h.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,h.jsxs)(`feMerge`,{children:[(0,h.jsx)(`feMergeNode`,{in:`blur`}),(0,h.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,h.jsx)(`path`,{d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.035`,vectorEffect:`non-scaling-stroke`}),(0,h.jsx)(`path`,{ref:t,d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,h.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`10`,fill:`currentColor`,opacity:`0.13`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function N(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),r=(0,m.useRef)(null),i=(0,m.useRef)(null),a=(0,m.useRef)(null),s=(0,m.useRef)(null),c=(0,m.useRef)(null),l=(0,m.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let u=o.matchMedia();return u.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:u,tablet:d,desktop:f,reduceMotion:p}=e.conditions,m=n.querySelector(`.principles-label`),h=n.querySelector(`.principles-heading`),g=n.querySelector(`.principles-copy`),_=o.utils.toArray(`.principle-card`),v=[],y=(e,t,n={})=>{if(!e)return;let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&(t(),r.disconnect())},n);r.observe(e),v.push(r)};if(p){o.set([m,h,g,_,`.principle-number`,`.principle-rule`],{x:0,y:0,scale:1,scaleX:1,rotate:0,autoAlpha:1}),o.set(`.principle-sheen`,{autoAlpha:0}),o.set([i.current,s.current,l.current],{autoAlpha:0});return}o.set(m,{y:14,autoAlpha:0}),o.set(h,{y:f?34:28,autoAlpha:0}),o.set(g,{y:22,autoAlpha:0}),y(m,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(m,{y:0,autoAlpha:1,duration:.42}).to(h,{y:0,autoAlpha:1,duration:.7},`-=0.2`).to(g,{y:0,autoAlpha:1,duration:.6},`-=0.4`)},{threshold:u?.08:.12,rootMargin:u?`0px 0px -4% 0px`:`0px 0px -6% 0px`});let b=null,x=null;if(u&&(b=r.current,x=i.current),d&&(b=a.current,x=s.current),f&&(b=c.current,x=l.current),b&&x&&(o.to(b,{strokeDashoffset:f?-160:-120,duration:f?9:7,repeat:-1,ease:`none`}),o.set(x,{autoAlpha:1,scale:f?.86:.8,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:f?`top 78%`:d?`top 88%`:`top 92%`,end:f?`bottom 24%`:d?`bottom 16%`:`bottom 10%`,scrub:f?.6:d?.8:.7,invalidateOnRefresh:!0}}).to(x,{motionPath:{path:b,align:b,alignOrigin:[.5,.5],start:0,end:1},duration:1,ease:`none`},0).to(x,{scale:f?1.35:1.15,duration:.06,ease:`power2.out`},.91).to(x,{scale:.9,duration:.08,ease:`power2.inOut`},.97)),!f)return _.forEach((e,t)=>{let n=e.querySelector(`.principle-number`),r=e.querySelector(`.principle-rule`),i=e.querySelector(`.principle-sheen`),a=u||t%2==0?-1:1;o.set(e,{x:u?0:a*18,y:30,scale:.98,autoAlpha:0}),o.set(n,{scale:.85,autoAlpha:0}),o.set(r,{scaleX:0,transformOrigin:`left center`}),o.set(i,{xPercent:-135,autoAlpha:0}),y(e,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(e,{x:0,y:0,scale:1,autoAlpha:1,duration:d?.62:.56}).to(n,{scale:1.1,autoAlpha:1,color:`#1092bf`,duration:.3,ease:`back.out(1.8)`},`-=0.38`).to(n,{scale:1,duration:.18},`-=0.08`).to(r,{scaleX:1,backgroundColor:`#1092bf`,duration:.35,ease:`power2.out`},`-=0.36`).to(i,{xPercent:135,autoAlpha:1,duration:.75,ease:`power2.inOut`},`-=0.4`).to(i,{autoAlpha:0,duration:.18},`-=0.16`)},{threshold:d?.12:.08,rootMargin:d?`0px 0px -7% 0px`:`0px 0px -4% 0px`})}),()=>{v.forEach(e=>{e.disconnect()})};_.forEach((e,t)=>{let n=e.querySelector(`.principle-number`),r=e.querySelector(`.principle-rule`),i=e.querySelector(`.principle-sheen`),a=t%2==0?-1:1;o.set(e,{x:a*26,y:36,scale:.975,autoAlpha:.3}),o.set(n,{scale:.9,color:`rgba(23,109,140,0.48)`}),o.set(r,{scaleX:.2,transformOrigin:`left center`}),o.set(i,{xPercent:-135,autoAlpha:0})});let S=o.timeline({scrollTrigger:{trigger:t.current,start:`top 76%`,end:`bottom 34%`,scrub:.62,invalidateOnRefresh:!0}}),C=[.08,.3,.52,.74];return _.forEach((e,t)=>{let n=C[t],r=e.querySelector(`.principle-number`),i=e.querySelector(`.principle-rule`),a=e.querySelector(`.principle-sheen`);S.to(e,{x:0,y:0,scale:1,autoAlpha:1,borderColor:`rgba(23,109,140,0.20)`,boxShadow:`0 16px 38px rgba(15,35,55,0.08)`,duration:.15,ease:`power2.out`},n),S.to(r,{color:`#1092bf`,scale:1.12,duration:.08,ease:`power2.out`},n).to(r,{scale:1,duration:.08},n+.08),S.to(i,{scaleX:1,backgroundColor:`#1092bf`,duration:.12,ease:`power2.out`},n+.02),S.to(a,{xPercent:135,autoAlpha:1,duration:.17,ease:`power1.inOut`},n+.03).to(a,{autoAlpha:0,duration:.07},n+.17),S.to(e,{boxShadow:`0 8px 28px rgba(15,35,55,0.06)`,duration:.12},n+.16)}),()=>{v.forEach(e=>{e.disconnect()})}}),()=>{u.revert()}},{scope:e}),(0,h.jsxs)(`section`,{ref:e,id:`principles`,className:`
        relative
        scroll-mt-[90px]
        overflow-hidden
        bg-brand-surface
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:px-8
        md:py-20
        lg:px-10
        lg:py-24
      `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -left-24
          top-20
          size-72
          rounded-full
          bg-brand-cyan/[0.04]
          blur-3xl
        `}),(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -right-28
          bottom-16
          size-80
          rounded-full
          bg-brand-primary/[0.04]
          blur-3xl
        `}),(0,h.jsx)(M,{path:k,pathRef:r,dotRef:i,viewBox:`0 0 390 760`,filterId:`principles-mobile-glow`,opacity:.17,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,h.jsx)(M,{path:A,pathRef:a,dotRef:s,viewBox:`0 0 768 760`,filterId:`principles-tablet-glow`,opacity:.18,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,h.jsx)(M,{path:j,pathRef:c,dotRef:l,viewBox:`0 0 1280 640`,filterId:`principles-desktop-glow`,opacity:.2,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,h.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[1280px]`,children:[(0,h.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-8`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`
                principles-label
                inline-flex
                rounded-full
                bg-brand-primary-light
                px-3
                py-1.5
              `,children:(0,h.jsx)(`span`,{className:`
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-brand-primary
                `,children:`How We Work`})}),(0,h.jsx)(`h2`,{className:`
                principles-heading
                mt-4
                max-w-[600px]
                text-[30px]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-brand-ink
                sm:text-[32px]
                md:text-[36px]
                lg:text-[40px]
              `,children:`Engineering principles that guide every project`})]}),(0,h.jsx)(`p`,{className:`
              principles-copy
              max-w-[560px]
              text-[13px]
              leading-6
              text-brand-muted
              sm:text-[14px]
              sm:leading-7
              md:text-[15px]
              lg:justify-self-end
            `,children:`Good software is more than code. Our approach combines technical discipline, clear communication, and a long-term view of the systems we create.`})]}),(0,h.jsx)(`div`,{ref:t,className:`
            relative
            mt-10
            grid
            gap-3
            sm:mt-12
            sm:gap-4
            md:grid-cols-2
          `,children:O.map(e=>(0,h.jsxs)(`article`,{className:`
                principle-card
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-brand-border-light
                bg-white
                p-5
                shadow-brand-card
                transition-[transform,border-color,box-shadow]
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-brand-primary/20
                hover:shadow-[0_14px_34px_rgba(15,35,55,0.08)]
                sm:p-6
                md:p-7
              `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
                  principle-sheen
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-1/2
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-brand-cyan/[0.08]
                  to-transparent
                `}),(0,h.jsxs)(`div`,{className:`relative z-10`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(`span`,{className:`
                      principle-number
                      text-[12px]
                      font-bold
                      text-brand-primary
                    `,children:e.number}),(0,h.jsx)(`span`,{className:`
                      principle-rule
                      h-px
                      w-8
                      origin-left
                      bg-brand-primary/25
                    `})]}),(0,h.jsx)(`h3`,{className:`
                    mt-5
                    text-[17px]
                    font-semibold
                    tracking-[-0.02em]
                    text-brand-ink
                    sm:mt-6
                    sm:text-[18px]
                    md:text-[20px]
                  `,children:e.title}),(0,h.jsx)(`p`,{className:`
                    mt-3
                    max-w-[520px]
                    text-[13px]
                    leading-6
                    text-brand-muted
                    md:text-[14px]
                  `,children:e.description})]})]},e.number))})]})]})}var P=[{name:`UniCredit`,logo:a},{name:`GCB Bank`,logo:u},{name:`Universal Merchant Bank`,logo:l},{name:`UniCredit`,logo:p},{name:`Enterprise Life`,logo:c},{name:`Transitions`,logo:t},{name:`Visual Software`,logo:s},{name:`Endsight Consulting`,logo:d}],F=`
  M195 0
  C195 80 155 120 165 190
  C175 260 230 300 220 375
  C210 450 165 500 175 575
  C185 630 210 665 195 690
`,I=`
  M384 0
  C384 80 325 120 335 195
  C345 270 445 305 435 380
  C425 455 330 505 340 575
  C350 635 410 665 384 690
`,L=`
  M610 0
  C610 95 535 145 500 220
  C465 295 515 350 610 380
  C705 410 740 475 690 545
  C660 590 625 625 610 690
`;function R({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,h.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,h.jsx)(`defs`,{children:(0,h.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,h.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,h.jsxs)(`feMerge`,{children:[(0,h.jsx)(`feMergeNode`,{in:`blur`}),(0,h.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,h.jsx)(`path`,{d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.03`,vectorEffect:`non-scaling-stroke`}),(0,h.jsx)(`path`,{ref:t,d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,h.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`10`,fill:`currentColor`,opacity:`0.12`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function z(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),r=(0,m.useRef)(null),i=(0,m.useRef)(null),a=(0,m.useRef)(null),s=(0,m.useRef)(null),c=(0,m.useRef)(null),l=(0,m.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let u=o.matchMedia();return u.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:u,tablet:d,desktop:f,reduceMotion:p}=e.conditions,m=n.querySelector(`.ecosystem-label`),h=n.querySelector(`.ecosystem-heading`),g=n.querySelector(`.ecosystem-copy`),_=o.utils.toArray(`.ecosystem-card`),v=[],y=(e,t,n={})=>{if(!e)return;let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&(t(),r.disconnect())},n);r.observe(e),v.push(r)};if(p){o.set([m,h,g,_,`.ecosystem-logo`],{x:0,y:0,scale:1,rotate:0,autoAlpha:1}),o.set(`.ecosystem-sheen`,{autoAlpha:0}),o.set([i.current,s.current,l.current],{autoAlpha:0});return}o.set(m,{y:12,autoAlpha:0}),o.set(h,{y:f?30:26,autoAlpha:0}),o.set(g,{y:20,autoAlpha:0}),y(m,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(m,{y:0,autoAlpha:1,duration:.4}).to(h,{y:0,autoAlpha:1,duration:.68},`-=0.2`).to(g,{y:0,autoAlpha:1,duration:.55},`-=0.38`)},{threshold:u?.08:.12,rootMargin:u?`0px 0px -4% 0px`:`0px 0px -6% 0px`});let b=null,x=null;if(u&&(b=r.current,x=i.current),d&&(b=a.current,x=s.current),f&&(b=c.current,x=l.current),b&&x&&(o.to(b,{strokeDashoffset:f?-140:-115,duration:f?9:7,repeat:-1,ease:`none`}),o.set(x,{autoAlpha:1,scale:f?.84:.8,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:f?`top 76%`:d?`top 88%`:`top 92%`,end:f?`bottom 28%`:d?`bottom 16%`:`bottom 10%`,scrub:f?.58:d?.8:.7,invalidateOnRefresh:!0}}).to(x,{motionPath:{path:b,align:b,alignOrigin:[.5,.5],start:0,end:1},duration:1,ease:`none`},0).to(x,{scale:f?1.3:1.14,duration:.06,ease:`power2.out`},.91).to(x,{scale:.9,duration:.08,ease:`power2.inOut`},.97)),!f)return _.forEach((e,t)=>{let n=e.querySelector(`.ecosystem-logo`),r=e.querySelector(`.ecosystem-sheen`);o.set(e,{y:26,scale:.97,autoAlpha:0}),o.set(n,{scale:.88,autoAlpha:0}),o.set(r,{xPercent:-140,autoAlpha:0}),y(e,()=>{let i=d?t%4*.045:t%2*.045;o.timeline({delay:i,defaults:{ease:`power3.out`}}).to(e,{y:0,scale:1,autoAlpha:1,duration:.55}).to(n,{scale:1.06,autoAlpha:1,duration:.35,ease:`back.out(1.6)`},`-=0.34`).to(n,{scale:1,duration:.18},`-=0.08`).to(r,{xPercent:140,autoAlpha:1,duration:.68,ease:`power2.inOut`},`-=0.36`).to(r,{autoAlpha:0,duration:.18},`-=0.15`)},{threshold:d?.14:.08,rootMargin:d?`0px 0px -6% 0px`:`0px 0px -4% 0px`})}),()=>{v.forEach(e=>{e.disconnect()})};_.forEach((e,t)=>{let n=e.querySelector(`.ecosystem-logo`),r=e.querySelector(`.ecosystem-sheen`),i=t%4,a=i===0?-24:i===1?-10:i===2?10:24;o.set(e,{x:a,y:30,scale:.97,autoAlpha:.24}),o.set(n,{scale:.9,autoAlpha:.25}),o.set(r,{xPercent:-140,autoAlpha:0})});let S=o.timeline({scrollTrigger:{trigger:t.current,start:`top 78%`,end:`top 32%`,scrub:.52,invalidateOnRefresh:!0}}),C=[.04,.13,.22,.31,.46,.55,.64,.73];return _.forEach((e,t)=>{let n=C[t],r=e.querySelector(`.ecosystem-logo`),i=e.querySelector(`.ecosystem-sheen`);S.to(e,{x:0,y:0,scale:1,autoAlpha:1,borderColor:`rgba(23,109,140,0.16)`,boxShadow:`0 14px 34px rgba(15,35,55,0.07)`,duration:.13,ease:`power2.out`},n),S.to(r,{scale:1.08,autoAlpha:1,duration:.08,ease:`power2.out`},n+.01).to(r,{scale:1,duration:.07,ease:`power2.inOut`},n+.09),S.to(i,{xPercent:140,autoAlpha:1,duration:.15,ease:`power1.inOut`},n+.02).to(i,{autoAlpha:0,duration:.06},n+.15),S.to(e,{boxShadow:`0 0 0 rgba(15,35,55,0)`,duration:.12},n+.14)}),()=>{v.forEach(e=>{e.disconnect()})}}),()=>{u.revert()}},{scope:e}),(0,h.jsxs)(`section`,{ref:e,className:`
        relative
        overflow-hidden
        bg-white
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:px-8
        md:py-20
        lg:px-10
        lg:py-24
      `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -left-24
          top-20
          size-72
          rounded-full
          bg-brand-cyan/[0.04]
          blur-3xl
        `}),(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -right-24
          bottom-10
          size-72
          rounded-full
          bg-brand-primary/[0.04]
          blur-3xl
        `}),(0,h.jsx)(R,{path:F,pathRef:r,dotRef:i,viewBox:`0 0 390 690`,filterId:`ecosystem-mobile-glow`,opacity:.16,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,h.jsx)(R,{path:I,pathRef:a,dotRef:s,viewBox:`0 0 768 690`,filterId:`ecosystem-tablet-glow`,opacity:.17,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,h.jsx)(R,{path:L,pathRef:c,dotRef:l,viewBox:`0 0 1220 690`,filterId:`ecosystem-desktop-glow`,opacity:.18,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,h.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[1220px]`,children:[(0,h.jsxs)(`div`,{className:`text-center`,children:[(0,h.jsx)(`div`,{className:`
              ecosystem-label
              inline-flex
              rounded-full
              bg-brand-primary-light
              px-3
              py-1.5
            `,children:(0,h.jsx)(`span`,{className:`
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-brand-primary
              `,children:`Trusted Ecosystem`})}),(0,h.jsx)(`h2`,{className:`
              ecosystem-heading
              mx-auto
              mt-4
              max-w-[800px]
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-brand-ink
              sm:text-[32px]
              md:text-[36px]
              lg:text-[40px]
            `,children:`Trusted by Leading Businesses in Ghana & Beyond`}),(0,h.jsx)(`p`,{className:`
              ecosystem-copy
              mx-auto
              mt-4
              max-w-[680px]
              text-[13px]
              leading-6
              text-brand-muted
              md:text-[14px]
            `,children:`Powering the mission-critical backbones of industry titans and institutions.`})]}),(0,h.jsx)(`div`,{ref:t,className:`
            mt-9
            grid
            grid-cols-2
            gap-3
            sm:mt-10
            sm:gap-4
            md:grid-cols-4
          `,children:P.map((e,t)=>(0,h.jsxs)(`div`,{className:`
                ecosystem-card
                group
                relative
                flex
                min-h-[105px]
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-brand-border-light
                bg-brand-surface
                px-4
                py-5
                transition-[transform,border-color,box-shadow,background-color]
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-brand-primary/15
                hover:bg-white
                hover:shadow-[0_12px_30px_rgba(15,35,55,0.06)]
                sm:px-6
              `,children:[(0,h.jsx)(`div`,{"aria-hidden":`true`,className:`
                  ecosystem-sheen
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-1/2
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-brand-cyan/[0.09]
                  to-transparent
                `}),(0,h.jsx)(`img`,{src:e.logo,alt:`${e.name} logo`,loading:`lazy`,decoding:`async`,className:`
                  ecosystem-logo
                  relative
                  z-10
                  max-h-13.5
                  max-w-[135px]
                  object-contain
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.03]
                  sm:max-w-[150px]
                  lg:max-w-[165px]
                `})]},`${e.name}-${t}`))})]})]})}function B(){return(0,h.jsxs)(`main`,{children:[(0,h.jsx)(b,{}),(0,h.jsx)(E,{}),(0,h.jsx)(N,{}),(0,h.jsx)(z,{}),(0,h.jsx)(D,{})]})}export{B as default};