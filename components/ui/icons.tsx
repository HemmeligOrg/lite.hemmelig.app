type IconProps = React.HTMLAttributes<SVGElement>;
type LogoProps = {
  width: number;
  height: number;
  className: string;
  alt?: string;
};

export const Icons = {
  logo: (props: LogoProps): React.ReactElement => (
    <svg
      version="1.0"
      viewBox="0 0 2919.000000 2793.000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs75" />
      <g
        transform="matrix(0.23173063,0,0,-0.23173063,-95.996013,6343.887)"
        className="fill-slate-900 dark:fill-slate-200"
        stroke="none"
        id="g69"
      >
        <path
          d="m 6755,27200 c -99,-5 -207,-13 -240,-19 -33,-6 -85,-11 -115,-11 -30,0 -71,-4 -90,-10 -19,-5 -75,-14 -125,-19 -96,-11 -188,-25 -300,-46 -38,-8 -97,-19 -130,-25 -33,-7 -91,-18 -130,-26 -38,-8 -91,-18 -116,-23 -25,-5 -66,-15 -90,-21 -24,-6 -71,-18 -104,-27 -237,-59 -390,-101 -580,-162 -197,-62 -335,-108 -407,-136 -36,-14 -62,-24 -155,-59 -49,-18 -143,-55 -168,-66 -11,-4 -76,-32 -145,-60 -334,-140 -739,-341 -1018,-507 -41,-24 -75,-43 -77,-43 -2,0 -23,-13 -47,-29 -24,-16 -59,-37 -78,-48 -41,-22 -48,-26 -255,-162 -621,-407 -1195,-893 -1688,-1432 -155,-169 -149,-157 -123,-279 8,-36 20,-94 26,-130 19,-101 39,-198 55,-275 9,-38 19,-91 24,-116 5,-25 14,-64 19,-85 6,-21 18,-70 27,-109 16,-72 33,-138 61,-247 40,-154 50,-168 82,-113 24,40 186,256 246,329 23,26 58,69 79,95 258,310 593,648 913,921 276,236 493,399 800,604 140,94 114,78 324,204 224,136 322,190 555,305 135,67 203,100 360,172 28,12 75,33 105,45 30,12 69,27 85,35 17,7 55,23 85,34 30,12 64,26 75,30 80,33 268,101 279,101 4,0 22,6 39,13 106,45 617,195 772,226 22,4 58,13 80,19 22,6 76,18 120,27 44,9 100,21 125,26 93,21 377,66 500,79 52,5 106,12 120,15 14,3 86,10 160,14 399,27 537,33 655,27 250,-11 470,-27 528,-38 62,-12 79,-29 98,-103 4,-16 17,-61 28,-100 11,-38 30,-110 42,-160 11,-49 25,-108 31,-130 5,-22 14,-67 18,-100 5,-33 13,-73 19,-88 6,-16 11,-47 11,-70 0,-23 5,-58 10,-77 6,-19 15,-82 20,-140 6,-58 14,-143 19,-190 6,-47 10,-231 10,-410 0,-179 -4,-363 -10,-410 -5,-47 -13,-132 -19,-190 -5,-58 -14,-121 -20,-140 -5,-19 -10,-48 -10,-65 0,-16 -6,-61 -14,-100 -9,-38 -22,-106 -31,-150 -16,-80 -29,-134 -61,-255 -34,-132 -47,-176 -59,-210 -7,-19 -22,-64 -34,-100 -23,-74 -40,-126 -52,-155 -4,-11 -24,-63 -44,-115 -20,-52 -44,-111 -52,-130 -9,-19 -22,-48 -29,-65 -245,-586 -694,-1250 -1219,-1805 -161,-170 -425,-424 -580,-556 -232,-199 -332,-280 -540,-436 -185,-139 -582,-415 -630,-438 -5,-3 -30,-18 -55,-34 -160,-103 -166,-108 -137,-138 7,-7 60,-65 117,-128 128,-140 333,-347 459,-462 64,-60 98,-85 110,-81 19,7 215,136 386,254 266,183 763,572 965,754 280,253 464,433 655,641 224,242 338,377 531,629 120,157 322,455 428,632 37,62 71,115 75,118 10,6 109,-16 311,-70 96,-25 320,-96 393,-125 12,-4 40,-15 62,-23 149,-56 335,-141 335,-153 0,-4 -75,-147 -128,-244 -54,-98 -196,-331 -281,-460 -134,-204 -458,-629 -595,-780 -17,-19 -76,-84 -131,-145 -208,-230 -402,-424 -640,-640 -60,-55 -112,-102 -115,-105 -7,-8 -219,-189 -271,-231 -24,-20 -66,-55 -94,-77 -76,-62 -506,-387 -593,-448 -42,-29 -146,-99 -229,-155 -84,-57 -153,-108 -153,-116 0,-7 26,-30 58,-51 31,-21 71,-47 87,-59 48,-33 240,-159 256,-167 17,-8 40,-22 97,-59 23,-15 59,-37 80,-48 20,-11 53,-30 72,-41 116,-69 231,-128 247,-128 16,0 85,44 138,88 6,4 33,23 60,42 69,46 369,277 526,405 305,247 565,481 854,770 208,209 385,398 486,519 13,16 29,34 34,40 78,86 381,465 427,536 10,14 43,61 75,105 82,113 303,448 303,459 0,3 13,24 29,48 15,24 41,66 56,93 15,28 38,68 50,90 99,170 293,562 355,715 12,30 29,70 36,87 26,59 42,97 59,143 10,25 21,54 26,65 5,11 13,34 18,50 5,17 19,55 31,85 12,30 26,69 30,85 5,17 27,84 50,150 46,137 70,217 115,380 9,33 23,81 31,106 8,26 14,53 14,62 0,8 6,37 14,63 8,27 22,85 31,129 10,44 23,107 30,140 52,233 119,669 135,883 6,68 12,128 15,132 3,5 11,118 17,252 15,287 16,752 4,964 -7,113 -6,153 3,158 10,7 239,-102 381,-181 30,-17 74,-41 98,-54 24,-13 51,-28 60,-34 226,-132 232,-137 232,-202 0,-26 7,-93 16,-148 14,-82 17,-183 17,-565 0,-303 -4,-491 -11,-540 -6,-41 -16,-131 -22,-200 -6,-69 -15,-150 -20,-180 -9,-56 -25,-167 -39,-275 -4,-33 -11,-69 -14,-80 -4,-11 -11,-49 -16,-85 -11,-68 -31,-171 -55,-280 -34,-152 -44,-197 -55,-240 -7,-25 -19,-72 -28,-105 -20,-83 -67,-250 -88,-320 -7,-22 -20,-65 -29,-95 -9,-30 -34,-109 -57,-175 -22,-66 -44,-133 -49,-150 -5,-16 -25,-75 -45,-130 -20,-55 -40,-111 -45,-125 -25,-74 -56,-150 -170,-420 -116,-274 -214,-481 -308,-652 -18,-32 -46,-83 -62,-113 -17,-30 -45,-79 -63,-107 -18,-29 -46,-75 -62,-101 -49,-80 -168,-257 -226,-338 -94,-129 -290,-381 -319,-409 -3,-3 -18,-21 -34,-40 -142,-175 -535,-567 -766,-765 -166,-142 -375,-310 -440,-355 -19,-13 -37,-27 -40,-30 -8,-9 -341,-239 -405,-280 -115,-73 -169,-107 -183,-115 -9,-6 -35,-22 -57,-36 -22,-14 -47,-29 -55,-32 -8,-4 -28,-16 -45,-26 -16,-11 -52,-32 -80,-47 -89,-49 -99,-55 -160,-89 -120,-69 -544,-275 -696,-339 -150,-64 -158,-66 -185,-51 -16,8 -103,51 -194,95 -91,44 -194,96 -230,116 -36,20 -94,51 -128,71 -381,209 -960,607 -1278,878 -39,33 -92,78 -119,100 -27,22 -75,63 -105,90 -31,28 -96,86 -146,130 -49,43 -188,178 -310,300 -200,200 -273,278 -434,460 -29,33 -65,74 -79,90 -40,45 -43,61 -20,118 22,55 29,71 78,180 17,37 31,70 31,73 0,6 116,253 130,274 5,8 27,51 49,95 59,115 100,188 198,351 49,80 93,152 98,162 87,144 327,460 448,588 30,32 64,70 75,84 27,34 255,240 322,290 49,37 133,95 182,125 44,27 199,106 234,119 21,7 77,28 124,45 200,74 344,116 613,177 42,9 77,20 77,23 0,4 10,17 23,31 84,93 341,478 457,685 68,121 150,288 150,305 0,18 -7,20 -57,20 -32,-1 -103,-5 -158,-10 -55,-6 -152,-15 -215,-20 -63,-6 -139,-14 -170,-20 -30,-5 -98,-16 -150,-25 -221,-37 -421,-85 -680,-165 -130,-40 -143,-44 -375,-136 -109,-43 -164,-69 -280,-134 -390,-218 -767,-552 -1106,-980 -93,-117 -156,-201 -195,-260 -17,-25 -55,-81 -86,-125 -30,-44 -74,-113 -99,-153 -24,-40 -52,-85 -61,-100 -10,-15 -22,-36 -28,-47 -5,-11 -16,-29 -22,-40 -46,-71 -228,-405 -244,-445 -3,-8 -10,-22 -15,-30 -5,-8 -13,-25 -19,-37 -5,-12 -25,-55 -43,-95 -111,-237 -165,-360 -213,-490 -8,-21 -21,-57 -30,-80 -9,-24 -23,-61 -31,-83 -8,-22 -21,-55 -29,-73 -8,-18 -14,-41 -14,-52 0,-10 -4,-21 -9,-24 -5,-3 -12,-18 -15,-33 -3,-16 -18,-65 -32,-109 -16,-48 -24,-91 -21,-105 6,-20 247,-351 313,-429 286,-336 364,-421 628,-685 367,-366 592,-566 941,-837 44,-34 85,-66 90,-70 190,-148 601,-434 767,-533 10,-5 70,-42 135,-81 65,-40 136,-82 158,-94 22,-12 58,-33 80,-45 207,-120 581,-303 875,-429 l 156,-66 149,49 c 184,61 216,73 289,105 32,14 62,26 67,26 5,0 38,14 72,30 35,17 67,30 70,30 4,0 39,15 79,34 40,18 105,48 143,66 545,252 1152,617 1659,998 190,143 199,150 391,313 396,336 684,625 1006,1009 270,321 590,785 766,1110 23,41 57,104 77,140 20,36 65,124 100,195 57,118 81,167 136,290 10,22 29,65 43,95 14,30 35,80 47,110 12,30 28,69 35,85 7,17 28,66 45,110 18,44 36,89 42,99 6,11 14,31 18,45 5,14 18,51 30,81 35,91 50,132 75,205 13,39 34,95 45,125 12,30 25,69 30,85 4,17 26,86 49,155 39,120 57,178 87,283 8,26 20,68 28,95 7,26 21,76 31,112 9,36 23,87 31,114 8,26 14,55 14,63 0,8 6,35 14,61 8,26 22,83 31,127 9,44 23,103 31,131 8,28 14,62 14,77 0,14 5,38 11,54 6,15 14,55 19,88 10,72 27,173 41,235 5,25 14,79 19,120 5,41 13,107 19,145 18,131 41,340 53,490 17,203 17,1005 0,1185 -26,278 -76,576 -117,705 -7,22 -16,51 -19,65 -5,26 -34,48 -239,186 -86,58 -174,115 -197,127 -8,4 -28,16 -45,27 -16,11 -37,23 -45,27 -8,4 -44,24 -79,46 -35,21 -74,43 -85,48 -12,5 -37,19 -56,31 -46,28 -454,233 -550,277 -41,19 -106,49 -145,66 -38,18 -142,63 -230,100 -88,36 -173,72 -190,79 -16,8 -48,20 -70,29 -22,8 -60,22 -85,32 -25,9 -58,23 -75,30 -28,12 -45,18 -150,58 -22,8 -76,29 -120,47 -44,18 -98,39 -120,47 -22,9 -49,19 -60,24 -11,4 -63,24 -115,44 -52,20 -113,43 -135,51 -22,9 -53,22 -68,30 -16,8 -33,11 -39,8 -10,-7 -5,-63 12,-119 4,-16 16,-66 25,-110 9,-44 22,-107 30,-140 7,-33 20,-96 30,-140 9,-44 23,-107 30,-140 8,-33 21,-96 30,-140 10,-44 22,-100 27,-125 13,-59 36,-221 48,-335 5,-49 14,-128 20,-175 19,-163 43,-691 37,-834 -14,-337 -29,-596 -38,-656 -5,-36 -14,-110 -19,-165 -14,-154 -56,-437 -79,-545 -13,-56 -30,-141 -40,-200 -5,-25 -14,-67 -21,-95 -6,-27 -18,-76 -26,-107 -29,-121 -71,-277 -89,-333 -7,-22 -23,-73 -35,-112 -12,-40 -24,-73 -25,-73 -9,0 -92,33 -142,55 -32,15 -67,31 -78,36 -78,32 -103,42 -125,49 -14,5 -50,18 -80,30 -30,11 -102,37 -160,56 -58,19 -118,39 -135,45 -16,6 -46,15 -65,19 -19,5 -69,19 -110,31 -41,12 -88,25 -105,28 -39,9 -38,27 10,156 20,55 40,114 44,130 5,17 13,41 19,55 5,14 18,52 27,85 10,33 24,78 31,100 6,22 20,69 29,105 9,36 23,87 31,114 8,26 14,55 14,64 0,8 6,38 14,66 14,49 30,125 57,266 12,64 16,90 38,265 7,50 16,115 21,145 44,253 44,1057 0,1356 -14,98 -31,229 -40,299 -21,182 -132,658 -195,835 -7,19 -22,64 -33,100 -12,36 -30,90 -42,120 -12,30 -25,66 -30,80 -4,14 -20,49 -34,77 -14,29 -26,55 -26,58 0,2 -16,38 -35,79 -35,75 -43,82 -105,97 -19,4 -66,17 -105,28 -125,37 -321,75 -470,91 -49,5 -121,14 -160,20 -92,13 -860,21 -1090,10 z"
          id="path65"
        />
        <path
          d="m 6555,24749 c -357,-15 -738,-58 -1020,-114 -38,-7 -88,-16 -110,-20 -22,-3 -53,-10 -70,-15 -16,-5 -66,-16 -110,-25 -44,-10 -100,-23 -125,-30 -25,-7 -74,-20 -110,-30 -36,-9 -83,-23 -105,-29 -22,-7 -67,-21 -100,-31 -33,-9 -71,-22 -85,-27 -14,-6 -38,-14 -55,-18 -16,-5 -55,-18 -85,-30 -30,-12 -68,-25 -85,-30 -30,-8 -308,-121 -342,-139 -10,-5 -110,-54 -223,-110 -113,-55 -230,-114 -260,-132 -570,-323 -1053,-708 -1481,-1179 -103,-113 -107,-118 -225,-260 -192,-230 -400,-526 -568,-810 -31,-52 -61,-102 -66,-110 -5,-8 -19,-34 -31,-56 -20,-39 -20,-44 -6,-70 8,-16 45,-101 82,-189 110,-263 124,-293 300,-648 70,-142 132,-256 137,-255 13,5 30,38 69,133 74,183 213,466 301,610 10,17 21,37 25,45 35,77 276,436 399,596 65,84 214,264 244,294 3,3 54,58 115,124 104,113 343,337 450,421 28,22 52,43 55,46 11,12 249,188 320,236 252,171 582,348 865,463 44,17 91,37 105,43 40,17 182,67 215,76 17,5 41,13 55,18 36,15 127,42 293,87 91,26 141,38 187,45 25,5 65,13 90,19 168,40 498,87 720,102 359,25 551,30 740,20 107,-5 249,-12 315,-15 66,-3 151,-11 188,-17 85,-14 92,-8 106,87 6,39 15,99 20,135 27,168 41,343 43,535 l 3,210 -110,12 c -108,13 -391,27 -710,37 -88,2 -250,0 -360,-5 z"
          id="path67"
        />
      </g>
    </svg>
  ),
  twitter: (props: LogoProps): React.ReactElement => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  gitHub: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: LogoProps): React.ReactElement => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: LogoProps): React.ReactElement => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: LogoProps): React.ReactElement => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: LogoProps): React.ReactElement => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: LogoProps): React.ReactElement => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: LogoProps): React.ReactElement => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  settings: (props: LogoProps): React.ReactElement => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  heartshake: (props: LogoProps): React.ReactElement => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  ),
  share: (props: LogoProps): React.ReactElement => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  unlock: (props: LogoProps): React.ReactElement => {
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>;
  },
};
