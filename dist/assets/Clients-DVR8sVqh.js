import{_ as e,a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./index-C9ilfYAB.js";var p=e(i(),1),m=f();function h(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let r=o.matchMedia();return r.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:r,tablet:s,desktop:c,reduceMotion:l}=e.conditions,u=n.querySelector(`.clients-cta-container`),d=n.querySelector(`.clients-cta-badge`),f=n.querySelector(`.clients-cta-heading`),p=n.querySelector(`.clients-cta-copy`),m=n.querySelector(`.clients-cta-button`),h=n.querySelector(`.clients-cta-glow-left`),g=n.querySelector(`.clients-cta-glow-right`);if(l){o.set([u,d,f,p,m,h,g],{x:0,y:0,scale:1,autoAlpha:1}),o.set(t.current,{scaleY:1}),o.set(i.current,{autoAlpha:0}),o.set(a.current,{scale:1,autoAlpha:1});return}o.set(u,{y:r?50:s?42:38,scale:r?.96:.98,autoAlpha:0,transformOrigin:`50% 50%`}),o.set(d,{y:18,scale:.9,autoAlpha:0}),o.set(f,{y:r?38:30,autoAlpha:0}),o.set(p,{y:r?26:20,autoAlpha:0}),o.set(m,{x:c?36:0,y:c?0:24,scale:.94,autoAlpha:0}),o.set(h,{x:-20,scale:.7,autoAlpha:0}),o.set(g,{x:20,scale:.7,autoAlpha:0}),o.set(t.current,{scaleY:0,transformOrigin:`top center`}),o.set(i.current,{y:0,scale:r?.95:.85,autoAlpha:1,transformOrigin:`50% 50%`}),o.set(a.current,{scale:.45,autoAlpha:0,transformOrigin:`50% 50%`});let _=c?96:s?80:64;o.timeline({scrollTrigger:{trigger:n,start:r?`top 92%`:s?`top 88%`:`top 80%`,end:r?`top 68%`:s?`top 60%`:`top 46%`,scrub:r?.65:s?.58:.5,invalidateOnRefresh:!0}}).to(t.current,{scaleY:1,duration:.7,ease:`none`},0).to(i.current,{y:_,duration:.7,ease:`none`},0).to(i.current,{scale:r?1.7:1.45,duration:.08,ease:`power2.out`},.72).to(a.current,{scale:1,autoAlpha:1,duration:.12,ease:`back.out(2)`},.75).to(a.current,{scale:r?1.6:1.4,duration:.08,ease:`power2.out`},.87).to(a.current,{scale:1,duration:.12,ease:`power2.inOut`},.94).to(i.current,{scale:.6,autoAlpha:0,duration:.08},.9);let v=new IntersectionObserver(([e])=>{e?.isIntersecting&&(o.timeline({defaults:{ease:`power3.out`}}).to(u,{y:0,scale:1,autoAlpha:1,duration:r?.72:.78}).to(h,{x:0,scale:1,autoAlpha:1,duration:1},.12).to(g,{x:0,scale:1,autoAlpha:1,duration:1.05},.16).to(d,{y:0,scale:1,autoAlpha:1,duration:.45,ease:`back.out(1.5)`},.2).to(f,{y:0,autoAlpha:1,duration:.68},.3).to(p,{y:0,autoAlpha:1,duration:.5},.42).to(m,{x:0,y:0,scale:1,autoAlpha:1,duration:.52},.5).to(m,{scale:1.035,duration:.16,ease:`power2.out`},.96).to(m,{scale:1,duration:.18,ease:`power2.inOut`},1.12),v.disconnect())},{threshold:r?.08:.14,rootMargin:r?`0px 0px -4% 0px`:`0px 0px -8% 0px`});return v.observe(u),o.to(h,{x:r?10:16,y:r?6:10,duration:6,repeat:-1,yoyo:!0,ease:`sine.inOut`}),o.to(g,{x:r?-10:-16,y:r?-6:-8,duration:7,repeat:-1,yoyo:!0,ease:`sine.inOut`}),()=>{v.disconnect()}}),()=>{r.revert()}},{scope:e}),(0,m.jsxs)(`section`,{ref:e,className:`
        relative
        overflow-hidden
        bg-white
        px-4
        pb-14
        pt-16
        sm:px-6
        sm:pb-16
        sm:pt-20
        md:px-8
        lg:px-10
        lg:pb-24
        lg:pt-24
      `,children:[(0,m.jsxs)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[1]
          h-16
          -translate-x-1/2
          sm:h-20
          lg:h-24
        `,children:[(0,m.jsx)(`div`,{className:`
            absolute
            left-1/2
            top-0
            h-full
            -translate-x-1/2
            border-l-2
            border-dashed
            border-brand-cyan/30
          `}),(0,m.jsx)(`div`,{ref:t,className:`
            absolute
            left-1/2
            top-0
            h-full
            w-0.5
            -translate-x-1/2
            origin-top
            bg-brand-cyan
          `}),(0,m.jsx)(`div`,{ref:i,className:`
            absolute
            left-1/2
            top-0
            size-3.5
            -translate-x-1/2
            rounded-full
            bg-brand-cyan
            shadow-[0_0_0_7px_rgba(16,146,191,0.12),0_0_24px_rgba(16,146,191,0.46)]
          `,children:(0,m.jsx)(`span`,{className:`
              absolute
              left-1/2
              top-1/2
              size-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
            `})})]}),(0,m.jsxs)(`div`,{className:`
          relative
          z-10
          mx-auto
          max-w-[1220px]
        `,children:[(0,m.jsx)(`div`,{ref:a,"aria-hidden":`true`,className:`
            absolute
            left-1/2
            top-0
            z-30
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
          `,children:(0,m.jsx)(`span`,{className:`size-2 rounded-full bg-brand-cyan`})}),(0,m.jsxs)(`div`,{className:`
            clients-cta-container
            relative
            overflow-hidden
            rounded-[22px]
            bg-gradient-to-r
            from-brand-primary
            to-brand-navy
            px-5
            py-10
            shadow-[0_14px_35px_rgba(0,45,51,0.18)]
            sm:px-7
            sm:py-11
            md:px-10
            lg:px-14
            lg:py-12
          `,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
              clients-cta-glow-left
              pointer-events-none
              absolute
              -left-20
              -top-24
              size-65
              rounded-full
              bg-brand-cyan/10
              blur-3xl
            `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
              clients-cta-glow-right
              pointer-events-none
              absolute
              -bottom-24
              -right-16
              size-65
              rounded-full
              bg-white/5
              blur-3xl
            `}),(0,m.jsxs)(`div`,{className:`
              relative
              z-10
              grid
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
            `,children:[(0,m.jsxs)(`div`,{className:`max-w-[680px]`,children:[(0,m.jsxs)(`div`,{className:`
                  clients-cta-badge
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-3
                  py-1.5
                `,children:[(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`
                    size-1.5
                    rounded-full
                    bg-white
                  `}),(0,m.jsx)(`span`,{className:`
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white/80
                  `,children:`Now Booking Engagements`})]}),(0,m.jsx)(`h2`,{className:`
                  clients-cta-heading
                  mt-5
                  max-w-[650px]
                  text-[30px]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-white
                  min-[390px]:text-[32px]
                  sm:text-[36px]
                  md:text-[40px]
                  lg:text-[44px]
                `,children:`Work with us — Let's build reliable, future-proof software together!`}),(0,m.jsx)(`p`,{className:`
                  clients-cta-copy
                  mt-5
                  max-w-[600px]
                  text-[13px]
                  leading-6
                  text-white/70
                  md:text-[14px]
                `,children:`Whether architecting a distributed transaction system or overhauling an existing tech stack, our senior engineers are ready to build with you.`})]}),(0,m.jsx)(`div`,{className:`lg:pr-2`,children:(0,m.jsxs)(r,{to:`/contact/sales`,className:`
                  clients-cta-button
                  group
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-[12px]
                  font-semibold
                  text-brand-ink
                  transition-[transform,box-shadow]
                  duration-200
                  ease-out
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-brand-navy
                  sm:w-auto
                `,children:[`Fill out the contact form`,(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                  `,children:`→`})]})})]})]})]})]})}var g=[{name:`UniCredit`,logo:a},{name:`GCB Bank`,logo:u},{name:`Universal Merchant Bank`,logo:l},{name:`Transitions`,logo:t},{name:`Visual Software`,logo:s},{name:`Enterprise Life`,logo:c}],_=`
  M195 0
  C195 70 155 110 165 175
  C175 245 230 280 225 350
  C220 420 165 470 175 530
  C180 560 195 580 195 590
`,v=`
  M384 0
  C384 75 325 115 335 180
  C345 250 440 285 430 355
  C420 425 330 475 340 535
  C350 565 370 580 384 590
`,y=`
  M640 0
  C640 85 710 120 735 195
  C765 280 700 345 630 405
  C575 455 595 525 640 590
`;function b({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,m.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,m.jsx)(`defs`,{children:(0,m.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,m.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,m.jsxs)(`feMerge`,{children:[(0,m.jsx)(`feMergeNode`,{in:`blur`}),(0,m.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,m.jsx)(`path`,{d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.03`,vectorEffect:`non-scaling-stroke`}),(0,m.jsx)(`path`,{ref:t,d:e,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,m.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`11`,fill:`currentColor`,opacity:`0.13`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function x(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(null),s=(0,p.useRef)(null),c=(0,p.useRef)(null),l=(0,p.useRef)(null),u=(0,p.useRef)(null),d=(0,p.useRef)(null);n(()=>{let n=e.current;if(!n)return;let f=o.matchMedia();return f.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:f,tablet:p,desktop:m,reduceMotion:h}=e.conditions,g=n.querySelector(`.clients-hero-label`),_=n.querySelector(`.clients-hero-heading`),v=n.querySelector(`.clients-hero-copy`),y=n.querySelector(`.clients-hero-logo-shell`),b=o.utils.toArray(`.clients-hero-logo-item`),x=n.querySelector(`.clients-hero-glow-left`),S=n.querySelector(`.clients-hero-glow-right`);if(h){o.set([g,_,v,y,b,x,S],{x:0,y:0,scale:1,autoAlpha:1}),r.current&&o.set(r.current,{x:0}),o.set([s.current,l.current,d.current],{autoAlpha:0});return}o.set(g,{y:f?18:14,scale:.95,autoAlpha:0}),o.set(_,{y:f?48:p?42:38,autoAlpha:0}),o.set(v,{y:f?28:22,autoAlpha:0}),o.set(y,{y:f?38:30,scale:f?.97:.985,autoAlpha:0}),o.set(b,{y:f?18:14,scale:f?.84:.9,autoAlpha:0}),o.set(x,{x:f?-24:-30,scale:.82,autoAlpha:0}),o.set(S,{x:f?24:30,scale:.82,autoAlpha:0}),t.current&&r.current&&(i.current=o.to(r.current,{x:()=>{let e=t.current,n=r.current;if(!e||!n)return 0;let i=n.scrollWidth-e.clientWidth;return-Math.max(i,0)},duration:m?4.8:4.2,ease:`sine.inOut`,repeat:-1,yoyo:!0,repeatDelay:.3,repeatRefresh:!0,paused:!0})),o.timeline({defaults:{ease:`power3.out`},onComplete:()=>{i.current?.play()}}).to(x,{x:0,scale:1,autoAlpha:1,duration:f?1:1.3},0).to(S,{x:0,scale:1,autoAlpha:1,duration:f?1.05:1.4},.04).to(g,{y:0,scale:1,autoAlpha:1,duration:.44},.1).to(_,{y:0,autoAlpha:1,duration:f?.78:.85},.2).to(v,{y:0,autoAlpha:1,duration:f?.6:.62},.43).to(y,{y:0,scale:1,autoAlpha:1,duration:f?.66:.62},.58).to(b,{y:0,scale:1,autoAlpha:1,duration:.42,stagger:f?.06:.07,ease:`back.out(1.35)`},.7);let C=null,w=null;if(f&&(C=a.current,w=s.current),p&&(C=c.current,w=l.current),m&&(C=u.current,w=d.current),C&&w){o.to(C,{strokeDashoffset:m?-140:-115,duration:m?8:7,repeat:-1,ease:`none`}),o.set(w,{autoAlpha:0,scale:f?.92:.82,transformOrigin:`50% 50%`});let e=f?2.25:p?2.45:2.8;o.timeline({delay:f?.3:.45}).to(w,{autoAlpha:1,scale:1,duration:.24,ease:`power2.out`}).to(w,{motionPath:{path:C,align:C,alignOrigin:[.5,.5],start:0,end:1},duration:e,ease:`power1.inOut`},0).to(w,{scale:f?1.5:1.3,duration:.1,ease:`power2.out`},e-.25).to(w,{scale:1,duration:.14,ease:`power2.inOut`},e-.15)}o.to(x,{x:f?9:15,y:f?6:8,duration:6,repeat:-1,yoyo:!0,ease:`sine.inOut`}),o.to(S,{x:f?-9:-16,y:f?-6:-8,duration:7,repeat:-1,yoyo:!0,ease:`sine.inOut`})}),()=>{i.current=null,f.revert()}},{scope:e});let f=()=>{i.current?.pause()},h=()=>{i.current?.resume()};return(0,m.jsxs)(`section`,{ref:e,className:`
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#eef8fb_0%,#f8fbfc_55%,#ffffff_100%)]
        px-4
        pb-10
        pt-16
        sm:px-6
        sm:pt-20
        md:px-8
        lg:px-10
        lg:pb-12
        lg:pt-24
      `,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          clients-hero-glow-left
          pointer-events-none
          absolute
          -left-[140px]
          top-5
          size-[390px]
          rounded-full
          bg-brand-cyan/[0.06]
          blur-[100px]
        `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          clients-hero-glow-right
          pointer-events-none
          absolute
          -right-[130px]
          top-20
          size-[420px]
          rounded-full
          bg-brand-primary/[0.05]
          blur-[110px]
        `}),(0,m.jsx)(b,{path:_,pathRef:a,dotRef:s,viewBox:`0 0 390 590`,filterId:`clients-hero-mobile-glow`,opacity:.21,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,m.jsx)(b,{path:v,pathRef:c,dotRef:l,viewBox:`0 0 768 590`,filterId:`clients-hero-tablet-glow`,opacity:.19,className:`
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
        `}),(0,m.jsx)(b,{path:y,pathRef:u,dotRef:d,viewBox:`0 0 1280 590`,filterId:`clients-hero-desktop-glow`,opacity:.18,className:`
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
        `}),(0,m.jsxs)(`div`,{className:`
          relative
          z-10
          mx-auto
          max-w-[1100px]
          text-center
        `,children:[(0,m.jsx)(`div`,{className:`
            clients-hero-label
            inline-flex
            rounded-full
            border
            border-brand-border-light
            bg-white/85
            px-3
            py-1.5
          `,children:(0,m.jsx)(`span`,{className:`
              text-[10px]
              font-semibold
              text-brand-primary
            `,children:`Clients`})}),(0,m.jsxs)(`h1`,{className:`
            clients-hero-heading
            mx-auto
            mt-5
            max-w-[950px]
            text-[38px]
            font-bold
            leading-[0.98]
            tracking-[-0.045em]
            text-brand-ink
            min-[390px]:text-[42px]
            sm:text-[46px]
            md:text-[52px]
            lg:text-[58px]
          `,children:[(0,m.jsxs)(`span`,{className:`md:hidden`,children:[`The work, and the people who`,` `,(0,m.jsx)(`span`,{className:`text-brand-primary`,children:`trusted us with it.`})]}),(0,m.jsxs)(`span`,{className:`hidden md:block`,children:[(0,m.jsx)(`span`,{className:`whitespace-nowrap`,children:`The work, and the people who`}),(0,m.jsx)(`span`,{className:`block text-brand-primary`,children:`trusted us with it.`})]})]}),(0,m.jsx)(`p`,{className:`
            clients-hero-copy
            mx-auto
            mt-5
            max-w-[650px]
            text-[13px]
            leading-6
            text-brand-muted
            sm:mt-6
            sm:text-[14px]
            sm:leading-7
            md:text-[15px]
          `,children:`From labs and law firms to catering and education, take a look at what we've built for businesses and institutions across Ghana.`}),(0,m.jsx)(`div`,{className:`
            clients-hero-logo-shell
            mx-auto
            mt-8
            max-w-[920px]
            overflow-hidden
            rounded-xl
            border
            border-brand-border-light
            bg-white
            px-4
            py-6
            shadow-[0_4px_20px_rgba(15,35,55,0.025)]
            sm:mt-10
            sm:px-5
            sm:py-7
            md:px-7
          `,children:(0,m.jsxs)(`div`,{className:`relative`,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
                pointer-events-none
                absolute
                bottom-0
                left-0
                top-0
                z-20
                w-10
                bg-gradient-to-r
                from-white
                to-transparent
                sm:w-14
              `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
                pointer-events-none
                absolute
                bottom-0
                right-0
                top-0
                z-20
                w-10
                bg-gradient-to-l
                from-white
                to-transparent
                sm:w-14
              `}),(0,m.jsx)(`div`,{ref:t,className:`overflow-hidden`,onMouseEnter:f,onMouseLeave:h,onTouchStart:f,onTouchEnd:h,onFocusCapture:f,onBlurCapture:h,children:(0,m.jsx)(`div`,{ref:r,className:`
                  flex
                  w-max
                  items-center
                  gap-5
                  will-change-transform
                  sm:gap-6
                  md:gap-7
                `,children:g.map(e=>(0,m.jsx)(`div`,{className:`
                      clients-hero-logo-item
                      flex
                      min-h-14
                      min-w-35
                      shrink-0
                      items-center
                      justify-center
                      px-3
                      sm:min-w-40
                      lg:min-w-[175px]
                    `,children:(0,m.jsx)(`img`,{src:e.logo,alt:`${e.name} logo`,decoding:`async`,className:`
                        max-h-10
                        max-w-[115px]
                        object-contain
                        transition-transform
                        duration-300
                        ease-out
                        hover:scale-[1.04]
                      `})},e.name))})})]})})]})]})}var S=[{value:10,suffix:`+`,label:`Projects Delivered`},{value:10,suffix:`+`,label:`Years Experience`},{value:98,suffix:`%`,label:`Client Satisfaction`},{value:45,suffix:`+`,label:`Projects Hours`}];function C(){let e=(0,p.useRef)(null),t=(0,p.useRef)([]),r=(0,p.useRef)(new Set);return n(()=>{let n=e.current;if(!n)return;let i=o.utils.toArray(`.clients-metric-card`),a=o.utils.toArray(`.clients-metric-label`),s=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,c=()=>{t.current.forEach((e,t)=>{let n=S[t];e&&n&&(e.textContent=`${n.value}${n.suffix}`)})};if(s){c(),o.set([i,a],{x:0,y:0,scale:1,autoAlpha:1});return}let l=e=>{let t=requestAnimationFrame(n=>{r.current.delete(t),e(n)});return r.current.add(t),t},u=(e,t,n,r=0)=>{let i=t>=90?1600:1350,a=performance.now()+r,o=r=>{if(r<a){l(o);return}let s=r-a,c=Math.min(s/i,1),u=1-(1-c)**3;if(e.textContent=`${Math.round(t*u)}${n}`,c<1){l(o);return}e.textContent=`${t}${n}`};l(o)},d=!1,f=()=>{d||(d=!0,t.current.forEach((e,t)=>{let n=S[t];e&&n&&(e.textContent=`0${n.suffix}`)}),o.fromTo(i,{y:24,scale:.975},{y:0,scale:1,duration:.6,stagger:.08,ease:`power3.out`,clearProps:`transform`}),o.fromTo(a,{y:10},{y:0,duration:.45,stagger:.08,ease:`power2.out`,clearProps:`transform`}),S.forEach((e,n)=>{let r=t.current[n];r&&(u(r,e.value,e.suffix,n*100),o.fromTo(r,{scale:.88},{scale:1,duration:.58,delay:n*.1,ease:`back.out(1.6)`,clearProps:`transform`}))}))},p=new IntersectionObserver(([e])=>{e?.isIntersecting&&(f(),p.disconnect())},{rootMargin:`0px 0px -20% 0px`,threshold:.05});return p.observe(n),()=>{p.disconnect(),r.current.forEach(e=>{cancelAnimationFrame(e)}),r.current.clear()}},{scope:e}),(0,m.jsx)(`section`,{ref:e,className:`
        border-y
        border-brand-border-light
        bg-brand-surface
        px-4
        py-9
        sm:px-6
        sm:py-10
        md:px-8
        lg:px-10
        lg:py-12
      `,children:(0,m.jsx)(`div`,{className:`mx-auto max-w-[1120px]`,children:(0,m.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4`,children:S.map((e,n)=>{let r=n%2==0,i=n<2,a=n===S.length-1;return(0,m.jsxs)(`div`,{className:[`
                    clients-metric-card
                    flex
                    min-h-30
                    flex-col
                    items-center
                    justify-center
                    px-3
                    py-5
                    text-center
                    sm:px-4
                  `,r?`border-r border-brand-border-light`:``,i?`border-b border-brand-border-light md:border-b-0`:``,a?`md:border-r-0`:`md:border-r md:border-brand-border-light`].join(` `),children:[(0,m.jsxs)(`p`,{ref:e=>{t.current[n]=e},className:`
                    clients-metric-value
                    text-[38px]
                    font-bold
                    leading-none
                    tracking-[-0.045em]
                    text-brand-primary
                    sm:text-[40px]
                    md:text-[44px]
                    lg:text-[46px]
                  `,children:[e.value,e.suffix]}),(0,m.jsx)(`p`,{className:`
                    clients-metric-label
                    mt-3
                    max-w-32
                    text-[10px]
                    font-semibold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-brand-muted
                    md:text-[11px]
                  `,children:e.label})]},e.label)})})})})}var w=[{name:`Washlab`,category:`University Laundry App`,description:`A laundry application designed for university students, making it easier to access and manage laundry services on campus.`,url:`https://washlab.app/`,image:`/assets/washlab-bg-BWkZE9zr.webp`},{name:`Styleo`,category:`Beauty Platform`,description:`A beauty application designed for stylists and customers to connect around beauty and personal care services.`,url:`https://styleoapp.com/`,image:`/assets/styleo-bg-CzuJ6dp5.webp`},{name:`Tali`,category:`Management System`,description:`A management application designed to help organizations manage workflows, operations, and everyday business processes.`,url:null,image:`/assets/tali-bg-CgYnWExi.webp`},{name:`Grid`,category:`Screen Management`,description:`A centralized screen management platform built on top of a Node server and dashboard, allowing multiple screens and applications to be controlled from one place.`,url:null,image:`/assets/grid-bg-81IODVr3.webp`},{name:`Porta`,category:`Digital Check-In`,description:`A digital check-in system designed to manage guest and visitor arrivals and departures through a simple check-in and check-out workflow.`,url:null,image:`/assets/porta-bg-BpUY8ByV.webp`}],T=`
  M195 0
  C195 95 150 140 160 225
  C170 315 235 360 225 450
  C215 540 165 600 175 690
  C185 770 215 820 195 860
`,E=`
  M384 0
  C384 95 315 140 325 225
  C335 315 455 360 445 450
  C435 540 330 600 340 690
  C350 770 420 820 384 860
`,D=`
  M610 0
  C610 95 535 145 500 220
  C465 300 525 355 610 390
  C700 430 760 485 720 560
  C680 630 625 690 610 760
  C600 805 605 835 610 860
`;function O({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,m.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,m.jsx)(`defs`,{children:(0,m.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,m.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,m.jsxs)(`feMerge`,{children:[(0,m.jsx)(`feMergeNode`,{in:`blur`}),(0,m.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,m.jsx)(`path`,{d:e,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.03`,vectorEffect:`non-scaling-stroke`}),(0,m.jsx)(`path`,{ref:t,d:e,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,m.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`11`,fill:`currentColor`,opacity:`0.13`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function k(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(null),s=(0,p.useRef)(null),c=(0,p.useRef)(null),l=(0,p.useRef)(null);n(()=>{let n=e.current;if(!n)return;let u=o.matchMedia();return u.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:u,tablet:d,desktop:f,reduceMotion:p}=e.conditions,m=n.querySelector(`.proven-heading`),h=n.querySelector(`.proven-copy`),g=o.utils.toArray(`.proven-system-card`),_=[],v=(e,t,n={})=>{if(!e)return;let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&(t(),r.disconnect())},n);r.observe(e),_.push(r)};if(p){o.set([m,h,g,`.proven-system-image-wrap`,`.proven-system-content`,`.proven-system-category`,`.proven-system-status`,`.proven-system-rail`],{x:0,y:0,scale:1,scaleX:1,autoAlpha:1}),o.set(`.proven-system-sheen`,{autoAlpha:0}),o.set([i.current,s.current,l.current],{autoAlpha:0});return}o.set(m,{y:u?36:30,autoAlpha:0}),o.set(h,{y:u?26:20,autoAlpha:0}),v(m,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(m,{y:0,autoAlpha:1,duration:.7}).to(h,{y:0,autoAlpha:1,duration:.55},`-=0.38`)},{threshold:.1,rootMargin:u?`0px 0px -4% 0px`:`0px 0px -6% 0px`});let y=null,b=null;if(u&&(y=r.current,b=i.current),d&&(y=a.current,b=s.current),f&&(y=c.current,b=l.current),y&&b&&(o.to(y,{strokeDashoffset:f?-150:-125,duration:f?9:7,repeat:-1,ease:`none`}),o.set(b,{autoAlpha:1,scale:u?.92:.84,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:f?`top 76%`:d?`top 88%`:`top 92%`,end:f?`bottom 30%`:d?`bottom 14%`:`bottom 8%`,scrub:f?.6:d?.76:.66,invalidateOnRefresh:!0}}).to(b,{motionPath:{path:y,align:y,alignOrigin:[.5,.5],start:0,end:1},duration:1,ease:`none`},0).to(b,{scale:u?1.45:1.3,duration:.06,ease:`power2.out`},.92).to(b,{scale:.9,duration:.08,ease:`power2.inOut`},.97)),!f)return g.forEach((e,t)=>{let n=e.querySelector(`.proven-system-image-wrap`),r=e.querySelector(`.proven-system-category`),i=e.querySelector(`.proven-system-content`),a=e.querySelector(`.proven-system-status`),s=e.querySelector(`.proven-system-rail`),c=e.querySelector(`.proven-system-sheen`),l=d&&t%2==1?1:-1;o.set(e,{x:d?l*20:0,y:u?48:38,scale:u?.96:.975,autoAlpha:0}),o.set(n,{scale:1.06}),o.set(r,{y:-12,scale:.95,autoAlpha:0}),o.set(i,{y:20,autoAlpha:0}),o.set(a,{y:10,autoAlpha:0}),o.set(s,{scaleX:0,transformOrigin:`left center`}),o.set(c,{xPercent:-140,autoAlpha:0}),v(e,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(e,{x:0,y:0,scale:1,autoAlpha:1,duration:u?.68:.62}).to(s,{scaleX:1,duration:.4,ease:`power2.out`},`-=0.42`).to(n,{scale:1,duration:.8,ease:`power2.out`},`-=0.52`).to(r,{y:0,scale:1,autoAlpha:1,duration:.4},`-=0.62`).to(i,{y:0,autoAlpha:1,duration:.48},`-=0.34`).to(a,{y:0,autoAlpha:1,duration:.36},`-=0.24`).to(c,{xPercent:140,autoAlpha:1,duration:.7,ease:`power2.inOut`},`-=0.46`).to(c,{autoAlpha:0,duration:.16},`-=0.15`)},{threshold:d?.12:.07,rootMargin:d?`0px 0px -7% 0px`:`0px 0px -3% 0px`})}),()=>{_.forEach(e=>{e.disconnect()})};g.forEach((e,t)=>{let n=t%3,r=n===0?-28:n===2?28:0,i=e.querySelector(`.proven-system-image-wrap`),a=e.querySelector(`.proven-system-category`),s=e.querySelector(`.proven-system-content`),c=e.querySelector(`.proven-system-status`),l=e.querySelector(`.proven-system-rail`),u=e.querySelector(`.proven-system-sheen`);o.set(e,{x:r,y:44,scale:.965,autoAlpha:.2}),o.set(i,{scale:1.055}),o.set(a,{y:-10,autoAlpha:0}),o.set(s,{y:18,autoAlpha:0}),o.set(c,{y:8,autoAlpha:0}),o.set(l,{scaleX:0,transformOrigin:`left center`}),o.set(u,{xPercent:-140,autoAlpha:0})});let x=o.timeline({scrollTrigger:{trigger:t.current,start:`top 78%`,end:`bottom 38%`,scrub:.62,invalidateOnRefresh:!0}}),S=[.05,.2,.35,.56,.72];return g.forEach((e,t)=>{let n=S[t],r=e.querySelector(`.proven-system-image-wrap`),i=e.querySelector(`.proven-system-category`),a=e.querySelector(`.proven-system-content`),o=e.querySelector(`.proven-system-status`),s=e.querySelector(`.proven-system-rail`),c=e.querySelector(`.proven-system-sheen`);x.to(e,{x:0,y:0,scale:1,autoAlpha:1,borderColor:`rgba(23,109,140,0.20)`,boxShadow:`0 18px 42px rgba(15,35,55,0.09)`,duration:.14,ease:`power2.out`},n),x.to(s,{scaleX:1,duration:.11,ease:`power2.out`},n+.01),x.to(r,{scale:1,duration:.18,ease:`power2.out`},n+.01),x.to(i,{y:0,autoAlpha:1,duration:.1,ease:`power2.out`},n+.03),x.to(a,{y:0,autoAlpha:1,duration:.12,ease:`power2.out`},n+.05),x.to(o,{y:0,autoAlpha:1,duration:.1,ease:`power2.out`},n+.08),x.to(c,{xPercent:140,autoAlpha:1,duration:.16,ease:`power1.inOut`},n+.02).to(c,{autoAlpha:0,duration:.06},n+.16),x.to(e,{boxShadow:`0 8px 26px rgba(15,35,55,0.055)`,duration:.12},n+.18)}),()=>{_.forEach(e=>{e.disconnect()})}}),()=>{u.revert()}},{scope:e});let u=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`
          relative
          overflow-hidden
          border-b
          border-brand-border-light
          bg-brand-surface-blue
        `,children:[(0,m.jsx)(`div`,{className:`
            proven-system-image-wrap
            relative
            aspect-8/5
            w-full
            overflow-hidden
            bg-brand-surface-blue
          `,children:(0,m.jsx)(`img`,{src:e.image,alt:`${e.name} project preview`,loading:`lazy`,decoding:`async`,className:`
              proven-system-image
              size-full
              object-cover
              object-top
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.025]
            `})}),(0,m.jsx)(`span`,{className:`
            proven-system-category
            absolute
            left-4
            top-4
            z-10
            rounded-full
            border
            border-white/60
            bg-white/90
            px-3
            py-1.5
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-brand-primary
            shadow-[0_4px_15px_rgba(15,35,55,0.08)]
            backdrop-blur-md
            md:text-[10px]
          `,children:e.category}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-12
            bg-gradient-to-t
            from-black/[0.06]
            to-transparent
          `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
            proven-system-sheen
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-1/2
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          `})]}),(0,m.jsxs)(`div`,{className:`
          proven-system-content
          flex
          flex-1
          flex-col
          bg-white
          p-5
          sm:p-6
        `,children:[(0,m.jsx)(`h3`,{className:`
            text-[20px]
            font-semibold
            tracking-[-0.025em]
            text-brand-ink
            md:text-[21px]
          `,children:e.name}),(0,m.jsx)(`p`,{className:`
            mt-3
            max-w-[330px]
            text-[12px]
            leading-6
            text-brand-muted
            md:text-[13px]
          `,children:e.description}),(0,m.jsx)(`div`,{className:`
            proven-system-status
            mt-auto
            pt-6
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-brand-primary/60
          `,children:e.url?`Live product`:`In Progress`})]})]}),d=`
    proven-system-card
    group
    relative
    flex
    min-h-[430px]
    flex-col
    overflow-hidden
    rounded-[18px]
    border
    border-brand-border-light
    bg-white
    shadow-[0_8px_26px_rgba(15,35,55,0.055)]
    transition-[transform,border-color,box-shadow]
    duration-300
    ease-out
    hover:-translate-y-1
    hover:border-brand-primary/25
    hover:shadow-[0_18px_42px_rgba(15,35,55,0.11)]
    motion-reduce:transform-none
  `;return(0,m.jsxs)(`section`,{ref:e,className:`
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
      `,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -left-40
          top-[18%]
          size-85
          rounded-full
          bg-brand-cyan/[0.035]
          blur-[100px]
        `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -right-40
          bottom-[5%]
          size-90
          rounded-full
          bg-brand-primary/[0.04]
          blur-[110px]
        `}),(0,m.jsx)(O,{path:T,pathRef:r,dotRef:i,viewBox:`0 0 390 860`,filterId:`proven-mobile-glow`,opacity:.21,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          size-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,m.jsx)(O,{path:E,pathRef:a,dotRef:s,viewBox:`0 0 768 860`,filterId:`proven-tablet-glow`,opacity:.19,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          size-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,m.jsx)(O,{path:D,pathRef:c,dotRef:l,viewBox:`0 0 1220 860`,filterId:`proven-desktop-glow`,opacity:.17,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          size-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,m.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-[1220px]`,children:[(0,m.jsxs)(`div`,{className:`
            grid
            gap-5
            lg:grid-cols-[1fr_0.75fr]
            lg:items-end
            lg:gap-8
          `,children:[(0,m.jsx)(`h2`,{className:`
              proven-heading
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-brand-ink
              sm:text-[32px]
              md:text-[38px]
              lg:text-[40px]
            `,children:`Proven Systems in Production`}),(0,m.jsx)(`p`,{className:`
              proven-copy
              max-w-[460px]
              text-[13px]
              leading-6
              text-brand-muted
              md:text-[14px]
              lg:justify-self-end
              lg:text-right
            `,children:`Real digital products designed to solve operational challenges across services, management, connected environments, and guest experiences.`})]}),(0,m.jsx)(`div`,{ref:t,className:`
            mt-9
            grid
            gap-5
            sm:mt-10
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          `,children:w.map(e=>e.url?(0,m.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Visit ${e.name} website`,className:`
                  ${d}
                  cursor-pointer
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand-primary
                  focus-visible:ring-offset-2
                `,children:[(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`
                    proven-system-rail
                    absolute
                    left-0
                    top-0
                    z-20
                    h-0.5
                    w-full
                    origin-left
                    bg-brand-cyan
                  `}),u(e)]},e.name):(0,m.jsxs)(`article`,{className:`
                  ${d}
                  cursor-default
                `,children:[(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`
                    proven-system-rail
                    absolute
                    left-0
                    top-0
                    z-20
                    h-0.5
                    w-full
                    origin-left
                    bg-brand-cyan
                  `}),u(e)]},e.name))})]})]})}var A=[{quote:`Lider Technologies modernized our logistics dispatch architecture from the ground up. Their team spent time in our cold storage plants to understand our exact network latency challenges before drafting a single line of code.`,initials:`NO`,name:`Nana Osei`,role:`Managing Director, Washlab`},{quote:`Data integrity and speed in laboratory diagnostic services are non-negotiable. Lider built us an electronic record sync platform that has maintained 99.99% uptime through power cuts and regional network fluctuations.`,initials:`LM`,name:`Dr. Linda Mensah`,role:`Head of Diagnostics, Porta`},{quote:`Their grasp of real-time financial reconciliation switches and strict ISO formatting is exceptional. Working with Lider feels like having an elite, dedicated software engineering unit inside our own headquarters.`,initials:`ED`,name:`Elorm Doe`,role:`Operations Director, Trainerzy`}],j=`
  M195 0
  C195 85 150 125 160 200
  C170 280 230 320 220 400
  C210 480 165 530 175 605
  C185 660 210 700 195 730
`,M=`
  M384 0
  C384 85 315 130 325 205
  C335 285 455 325 445 405
  C435 485 330 535 340 610
  C350 665 415 705 384 730
`,N=`
  M610 0
  C610 90 530 130 495 205
  C460 285 520 345 610 375
  C705 410 760 475 720 545
  C680 615 630 675 610 730
`;function P({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,m.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,m.jsx)(`defs`,{children:(0,m.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,m.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,m.jsxs)(`feMerge`,{children:[(0,m.jsx)(`feMergeNode`,{in:`blur`}),(0,m.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,m.jsx)(`path`,{d:e,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.03`,vectorEffect:`non-scaling-stroke`}),(0,m.jsx)(`path`,{ref:t,d:e,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,m.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`11`,fill:`currentColor`,opacity:`0.13`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function F(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(null),s=(0,p.useRef)(null),c=(0,p.useRef)(null),l=(0,p.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let u=o.matchMedia();return u.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:u,tablet:d,desktop:f,reduceMotion:p}=e.conditions,m=n.querySelector(`.testimonials-heading`),h=n.querySelector(`.testimonials-copy`),g=o.utils.toArray(`.testimonial-card`),_=[],v=(e,t,n={})=>{if(!e)return;let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&(t(),r.disconnect())},n);r.observe(e),_.push(r)};if(p){o.set([m,h,g,`.testimonial-quote-mark`,`.testimonial-quote`,`.testimonial-author`,`.testimonial-card-rail`],{x:0,y:0,scale:1,scaleX:1,rotate:0,autoAlpha:1}),o.set(`.testimonial-card-sheen`,{autoAlpha:0}),o.set([i.current,s.current,l.current],{autoAlpha:0});return}o.set(m,{y:u?38:30,autoAlpha:0}),o.set(h,{y:u?26:20,autoAlpha:0}),v(m,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(m,{y:0,autoAlpha:1,duration:.72}).to(h,{y:0,autoAlpha:1,duration:.55},`-=0.4`)},{threshold:.1,rootMargin:u?`0px 0px -4% 0px`:`0px 0px -6% 0px`});let y=null,b=null;if(u&&(y=r.current,b=i.current),d&&(y=a.current,b=s.current),f&&(y=c.current,b=l.current),y&&b&&(o.to(y,{strokeDashoffset:f?-140:-120,duration:f?9:7,repeat:-1,ease:`none`}),o.set(b,{autoAlpha:1,scale:u?.92:.84,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:f?`top 76%`:d?`top 88%`:`top 92%`,end:f?`bottom 34%`:d?`bottom 18%`:`bottom 10%`,scrub:f?.58:d?.76:.66,invalidateOnRefresh:!0}}).to(b,{motionPath:{path:y,align:y,alignOrigin:[.5,.5],start:0,end:1},duration:1,ease:`none`},0).to(b,{scale:u?1.45:1.3,duration:.06,ease:`power2.out`},.92).to(b,{scale:.9,duration:.08,ease:`power2.inOut`},.97)),!f)return g.forEach((e,t)=>{let n=e.querySelector(`.testimonial-quote-mark`),r=e.querySelector(`.testimonial-quote`),i=e.querySelector(`.testimonial-author`),a=e.querySelector(`.testimonial-card-rail`),s=e.querySelector(`.testimonial-card-sheen`),c=d&&t%2==1?1:-1;o.set(e,{x:d?c*20:0,y:u?52:40,scale:u?.955:.975,autoAlpha:0}),o.set(n,{y:20,scale:.55,rotate:c*-7,autoAlpha:0}),o.set(r,{y:22,autoAlpha:0}),o.set(i,{y:18,autoAlpha:0}),o.set(a,{scaleX:0,transformOrigin:`left center`}),o.set(s,{xPercent:-140,autoAlpha:0}),v(e,()=>{o.timeline({defaults:{ease:`power3.out`}}).to(e,{x:0,y:0,scale:1,autoAlpha:1,duration:u?.7:.62}).to(a,{scaleX:1,duration:.4,ease:`power2.out`},`-=0.44`).to(n,{y:0,scale:1.1,rotate:0,autoAlpha:1,duration:.42,ease:`back.out(1.8)`},`-=0.38`).to(n,{scale:1,duration:.16},`-=0.08`).to(r,{y:0,autoAlpha:1,duration:.48},`-=0.3`).to(i,{y:0,autoAlpha:1,duration:.42},`-=0.24`).to(s,{xPercent:140,autoAlpha:1,duration:.7,ease:`power2.inOut`},`-=0.42`).to(s,{autoAlpha:0,duration:.16},`-=0.14`)},{threshold:d?.14:.08,rootMargin:d?`0px 0px -7% 0px`:`0px 0px -3% 0px`})}),()=>{_.forEach(e=>{e.disconnect()})};g.forEach((e,t)=>{let n=e.querySelector(`.testimonial-quote-mark`),r=e.querySelector(`.testimonial-quote`),i=e.querySelector(`.testimonial-author`),a=e.querySelector(`.testimonial-card-rail`),s=e.querySelector(`.testimonial-card-sheen`),c=t===0?-30:t===2?30:0;o.set(e,{x:c,y:44,scale:.965,autoAlpha:.22}),o.set(n,{y:16,scale:.65,rotate:-6,autoAlpha:.15}),o.set(r,{y:16,autoAlpha:0}),o.set(i,{y:12,autoAlpha:0}),o.set(a,{scaleX:0,transformOrigin:`left center`}),o.set(s,{xPercent:-140,autoAlpha:0})});let x=o.timeline({scrollTrigger:{trigger:t.current,start:`top 78%`,end:`top 30%`,scrub:.6,invalidateOnRefresh:!0}}),S=[.08,.37,.66];return g.forEach((e,t)=>{let n=S[t],r=e.querySelector(`.testimonial-quote-mark`),i=e.querySelector(`.testimonial-quote`),a=e.querySelector(`.testimonial-author`),o=e.querySelector(`.testimonial-card-rail`),s=e.querySelector(`.testimonial-card-sheen`);x.to(e,{x:0,y:0,scale:1,autoAlpha:1,borderColor:`rgba(23,109,140,0.20)`,boxShadow:`0 16px 38px rgba(15,35,55,0.08)`,duration:.16,ease:`power2.out`},n),x.to(o,{scaleX:1,duration:.12,ease:`power2.out`},n+.01),x.to(r,{y:0,scale:1.12,rotate:0,autoAlpha:1,duration:.09,ease:`back.out(1.8)`},n+.02).to(r,{scale:1,duration:.07},n+.1),x.to(i,{y:0,autoAlpha:1,duration:.11,ease:`power2.out`},n+.04),x.to(a,{y:0,autoAlpha:1,duration:.11,ease:`power2.out`},n+.08),x.to(s,{xPercent:140,autoAlpha:1,duration:.16,ease:`power1.inOut`},n+.03).to(s,{autoAlpha:0,duration:.06},n+.17),x.to(e,{boxShadow:`0 4px 18px rgba(15,35,55,0.035)`,duration:.12},n+.18)}),()=>{_.forEach(e=>{e.disconnect()})}}),()=>{u.revert()}},{scope:e}),(0,m.jsxs)(`section`,{ref:e,className:`
        relative
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
      `,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -left-32
          top-1/3
          size-70
          rounded-full
          bg-brand-cyan/[0.035]
          blur-[90px]
        `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -right-32
          bottom-0
          size-75
          rounded-full
          bg-brand-primary/[0.035]
          blur-[100px]
        `}),(0,m.jsx)(P,{path:j,pathRef:r,dotRef:i,viewBox:`0 0 390 730`,filterId:`testimonials-mobile-glow`,opacity:.21,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          size-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,m.jsx)(P,{path:M,pathRef:a,dotRef:s,viewBox:`0 0 768 730`,filterId:`testimonials-tablet-glow`,opacity:.19,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          size-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,m.jsx)(P,{path:N,pathRef:c,dotRef:l,viewBox:`0 0 1220 730`,filterId:`testimonials-desktop-glow`,opacity:.17,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          size-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,m.jsxs)(`div`,{className:`
          relative
          z-10
          mx-auto
          max-w-[1220px]
        `,children:[(0,m.jsxs)(`div`,{className:`text-center`,children:[(0,m.jsx)(`h2`,{className:`
              testimonials-heading
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-brand-ink
              sm:text-[32px]
              md:text-[38px]
              lg:text-[40px]
            `,children:`What Our Partners Say`}),(0,m.jsx)(`p`,{className:`
              testimonials-copy
              mx-auto
              mt-4
              max-w-[680px]
              text-[13px]
              leading-6
              text-brand-muted
              md:text-[14px]
            `,children:`Engineering rigor, dedicated communication, and software that scales with real African enterprise demands.`})]}),(0,m.jsx)(`div`,{ref:t,className:`
            mt-9
            grid
            gap-4
            sm:mt-10
            sm:gap-5
            lg:grid-cols-3
          `,children:A.map(e=>(0,m.jsxs)(`article`,{className:`
                testimonial-card
                group
                relative
                flex
                min-h-80
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-brand-border-light
                bg-white
                p-6
                shadow-[0_4px_18px_rgba(15,35,55,0.035)]
                transition-[transform,border-color,box-shadow]
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-brand-primary/20
                hover:shadow-[0_16px_38px_rgba(15,35,55,0.08)]
                sm:p-7
              `,children:[(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`
                  testimonial-card-rail
                  absolute
                  left-0
                  top-0
                  h-0.5
                  w-full
                  origin-left
                  bg-brand-cyan
                `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
                  testimonial-card-sheen
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-1/2
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-brand-cyan/[0.07]
                  to-transparent
                `}),(0,m.jsxs)(`div`,{className:`relative z-10 flex h-full flex-col`,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
                    testimonial-quote-mark
                    font-serif
                    text-[52px]
                    font-bold
                    leading-none
                    text-brand-primary
                  `,children:`“`}),(0,m.jsx)(`blockquote`,{className:`
                    testimonial-quote
                    mt-2
                    text-[13px]
                    italic
                    leading-6
                    text-brand-text
                    md:text-[14px]
                  `,children:e.quote}),(0,m.jsx)(`div`,{className:`
                    testimonial-author
                    mt-auto
                    border-t
                    border-brand-border-light
                    pt-5
                  `,children:(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(`div`,{className:`
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-brand-border-light
                        bg-brand-primary-light
                        text-[10px]
                        font-semibold
                        text-brand-primary
                      `,children:e.initials}),(0,m.jsxs)(`div`,{className:`min-w-0`,children:[(0,m.jsx)(`p`,{className:`
                          text-[12px]
                          font-semibold
                          text-brand-ink
                          md:text-[13px]
                        `,children:e.name}),(0,m.jsx)(`p`,{className:`
                          mt-1
                          text-[11px]
                          leading-4
                          text-brand-muted
                          md:text-[12px]
                        `,children:e.role})]})]})})]})]},e.name))})]})]})}var I=[{name:`UniCredit`,logo:a},{name:`GCB Bank`,logo:u},{name:`Universal Merchant Bank`,logo:l},{name:`UniCredit`,logo:a},{name:`Enterprise Life`,logo:c},{name:`Transitions`,logo:t},{name:`Visual Software`,logo:s},{name:`Endsight Consulting`,logo:d}],L=`
  M195 0
  C195 85 150 125 160 200
  C170 275 230 315 220 390
  C210 465 165 515 175 590
  C185 645 210 680 195 710
`,R=`
  M384 0
  C384 85 315 130 325 205
  C335 280 455 320 445 395
  C435 470 330 520 340 595
  C350 650 415 685 384 710
`,z=`
  M610 0
  C610 90 535 130 500 205
  C465 285 525 345 610 375
  C700 410 760 475 720 545
  C680 615 630 670 610 710
`;function B({path:e,pathRef:t,dotRef:n,viewBox:r,filterId:i,opacity:a,className:o}){return(0,m.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:r,preserveAspectRatio:`none`,fill:`none`,className:o,children:[(0,m.jsx)(`defs`,{children:(0,m.jsxs)(`filter`,{id:i,x:`-200%`,y:`-200%`,width:`500%`,height:`500%`,children:[(0,m.jsx)(`feGaussianBlur`,{stdDeviation:`4`,result:`blur`}),(0,m.jsxs)(`feMerge`,{children:[(0,m.jsx)(`feMergeNode`,{in:`blur`}),(0,m.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})}),(0,m.jsx)(`path`,{d:e,stroke:`currentColor`,strokeWidth:`5`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:`0.03`,vectorEffect:`non-scaling-stroke`}),(0,m.jsx)(`path`,{ref:t,d:e,stroke:`currentColor`,strokeWidth:`2`,strokeDasharray:`7 12`,strokeLinecap:`round`,opacity:a,vectorEffect:`non-scaling-stroke`}),(0,m.jsxs)(`g`,{ref:n,filter:`url(#${i})`,children:[(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`11`,fill:`currentColor`,opacity:`0.13`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`5`,fill:`currentColor`}),(0,m.jsx)(`circle`,{cx:`0`,cy:`0`,r:`1.8`,fill:`white`})]})]})}function V(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(null),s=(0,p.useRef)(null),c=(0,p.useRef)(null),l=(0,p.useRef)(null);return n(()=>{let n=e.current;if(!n)return;let u=o.matchMedia();return u.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1023px)`,desktop:`(min-width: 1024px)`,reduceMotion:`(prefers-reduced-motion: reduce)`},e=>{let{mobile:u,tablet:d,desktop:f,reduceMotion:p}=e.conditions,m=n.querySelector(`.trusted-businesses-heading`),h=o.utils.toArray(`.trusted-business-card`),g=[],_=(e,t,n={})=>{if(!e)return;let r=new IntersectionObserver(([e])=>{e?.isIntersecting&&(t(),r.disconnect())},n);r.observe(e),g.push(r)};if(p){o.set([m,h,`.trusted-business-image`,`.trusted-business-rail`],{x:0,y:0,scale:1,scaleX:1,autoAlpha:1}),o.set(`.trusted-business-sheen`,{autoAlpha:0}),o.set([i.current,s.current,l.current],{autoAlpha:0});return}o.set(m,{y:u?40:32,autoAlpha:0}),_(m,()=>{o.to(m,{y:0,autoAlpha:1,duration:.75,ease:`power3.out`})},{threshold:.12,rootMargin:u?`0px 0px -4% 0px`:`0px 0px -7% 0px`});let v=null,y=null;if(u&&(v=r.current,y=i.current),d&&(v=a.current,y=s.current),f&&(v=c.current,y=l.current),v&&y&&(o.to(v,{strokeDashoffset:f?-145:-120,duration:f?9:7,repeat:-1,ease:`none`}),o.set(y,{scale:u?.92:.84,autoAlpha:1,transformOrigin:`50% 50%`}),o.timeline({scrollTrigger:{trigger:n,start:f?`top 76%`:d?`top 88%`:`top 92%`,end:f?`bottom 32%`:d?`bottom 16%`:`bottom 8%`,scrub:f?.58:d?.74:.66,invalidateOnRefresh:!0}}).to(y,{motionPath:{path:v,align:v,alignOrigin:[.5,.5],start:0,end:1},duration:1,ease:`none`},0).to(y,{scale:u?1.45:1.3,duration:.06,ease:`power2.out`},.92).to(y,{scale:.9,duration:.08,ease:`power2.inOut`},.97)),!f)return h.forEach((e,t)=>{let n=e.querySelector(`.trusted-business-image`),r=e.querySelector(`.trusted-business-rail`),i=e.querySelector(`.trusted-business-sheen`),a=d&&t%2==1?1:-1;o.set(e,{x:d?a*18:0,y:u?44:34,scale:u?.96:.975,autoAlpha:0}),o.set(n,{y:10,scale:u?.8:.86,autoAlpha:0}),o.set(r,{scaleX:0,transformOrigin:`left center`}),o.set(i,{xPercent:-140,autoAlpha:0}),_(e,()=>{let a=d?t%4*.04:t%2*.04;o.timeline({delay:a,defaults:{ease:`power3.out`}}).to(e,{x:0,y:0,scale:1,autoAlpha:1,duration:u?.62:.56}).to(r,{scaleX:1,duration:.38,ease:`power2.out`},`-=0.4`).to(n,{y:0,scale:1.08,autoAlpha:1,duration:.36,ease:`back.out(1.7)`},`-=0.34`).to(n,{scale:1,duration:.16},`-=0.08`).to(i,{xPercent:140,autoAlpha:1,duration:.65,ease:`power2.inOut`},`-=0.38`).to(i,{autoAlpha:0,duration:.16},`-=0.14`)},{threshold:d?.14:.08,rootMargin:d?`0px 0px -7% 0px`:`0px 0px -3% 0px`})}),()=>{g.forEach(e=>{e.disconnect()})};h.forEach((e,t)=>{let n=e.querySelector(`.trusted-business-image`),r=e.querySelector(`.trusted-business-rail`),i=e.querySelector(`.trusted-business-sheen`),a=t%4,s=a===0?-28:a===1?-12:a===2?12:28;o.set(e,{x:s,y:32,scale:.965,autoAlpha:.2}),o.set(n,{y:8,scale:.86,autoAlpha:.2}),o.set(r,{scaleX:0,transformOrigin:`left center`}),o.set(i,{xPercent:-140,autoAlpha:0})});let b=o.timeline({scrollTrigger:{trigger:t.current,start:`top 78%`,end:`top 30%`,scrub:.58,invalidateOnRefresh:!0}}),x=[.04,.13,.22,.31,.48,.57,.66,.75];return h.forEach((e,t)=>{let n=x[t],r=e.querySelector(`.trusted-business-image`),i=e.querySelector(`.trusted-business-rail`),a=e.querySelector(`.trusted-business-sheen`);b.to(e,{x:0,y:0,scale:1,autoAlpha:1,borderColor:`rgba(23,109,140,0.18)`,boxShadow:`0 14px 32px rgba(15,35,55,0.07)`,duration:.14,ease:`power2.out`},n),b.to(i,{scaleX:1,duration:.1,ease:`power2.out`},n+.01),b.to(r,{y:0,scale:1.08,autoAlpha:1,duration:.09,ease:`back.out(1.6)`},n+.02).to(r,{scale:1,duration:.07},n+.1),b.to(a,{xPercent:140,autoAlpha:1,duration:.15,ease:`power1.inOut`},n+.03).to(a,{autoAlpha:0,duration:.06},n+.16),b.to(e,{boxShadow:`0 4px 16px rgba(15,35,55,0.025)`,duration:.12},n+.17)}),()=>{g.forEach(e=>{e.disconnect()})}}),()=>{u.revert()}},{scope:e}),(0,m.jsxs)(`section`,{ref:e,className:`
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
      `,children:[(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -left-40
          top-1/4
          size-80
          rounded-full
          bg-brand-cyan/[0.035]
          blur-[100px]
        `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          -right-40
          bottom-[5%]
          size-80
          rounded-full
          bg-brand-primary/[0.035]
          blur-[100px]
        `}),(0,m.jsx)(B,{path:L,pathRef:r,dotRef:i,viewBox:`0 0 390 710`,filterId:`trusted-businesses-mobile-glow`,opacity:.21,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          size-full
          overflow-visible
          text-brand-cyan
          md:hidden
        `}),(0,m.jsx)(B,{path:R,pathRef:a,dotRef:s,viewBox:`0 0 768 710`,filterId:`trusted-businesses-tablet-glow`,opacity:.19,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          size-full
          overflow-visible
          text-brand-cyan
          md:block
          lg:hidden
        `}),(0,m.jsx)(B,{path:z,pathRef:c,dotRef:l,viewBox:`0 0 1220 710`,filterId:`trusted-businesses-desktop-glow`,opacity:.17,className:`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          size-full
          overflow-visible
          text-brand-cyan
          lg:block
        `}),(0,m.jsxs)(`div`,{className:`
          relative
          z-10
          mx-auto
          max-w-[1220px]
        `,children:[(0,m.jsx)(`div`,{className:`text-center`,children:(0,m.jsxs)(`h2`,{className:`
              trusted-businesses-heading
              mx-auto
              max-w-[760px]
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-brand-ink
              sm:text-[32px]
              md:text-[38px]
              lg:text-[40px]
            `,children:[(0,m.jsx)(`span`,{className:`md:block`,children:`Trusted by Leading Businesses in`}),` `,(0,m.jsx)(`span`,{className:`md:block`,children:`Ghana & Beyond`})]})}),(0,m.jsx)(`div`,{ref:t,className:`
            mt-9
            grid
            grid-cols-2
            gap-3
            sm:mt-12
            sm:gap-4
            md:grid-cols-4
          `,children:I.map((e,t)=>(0,m.jsxs)(`div`,{className:`
                trusted-business-card
                group
                relative
                flex
                min-h-26
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-brand-border-light
                bg-brand-surface-blue
                px-4
                py-5
                shadow-[0_4px_16px_rgba(15,35,55,0.025)]
                transition-[transform,border-color,box-shadow,background-color]
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-brand-primary/20
                hover:bg-white
                hover:shadow-[0_12px_30px_rgba(15,35,55,0.07)]
                sm:px-6
              `,children:[(0,m.jsx)(`span`,{"aria-hidden":`true`,className:`
                  trusted-business-rail
                  absolute
                  left-0
                  top-0
                  h-0.5
                  w-full
                  origin-left
                  bg-brand-cyan
                `}),(0,m.jsx)(`div`,{"aria-hidden":`true`,className:`
                  trusted-business-sheen
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
                `}),(0,m.jsx)(`img`,{src:e.logo,alt:`${e.name} logo`,loading:`lazy`,decoding:`async`,className:`
                  trusted-business-image
                  relative
                  z-10
                  max-h-13
                  max-w-[130px]
                  object-contain
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.04]
                  sm:max-w-[145px]
                  lg:max-w-[155px]
                `})]},`${e.name}-${t}`))})]})]})}function H(){return(0,m.jsxs)(`main`,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(C,{}),(0,m.jsx)(k,{}),(0,m.jsx)(F,{}),(0,m.jsx)(V,{}),(0,m.jsx)(h,{})]})}export{H as default};