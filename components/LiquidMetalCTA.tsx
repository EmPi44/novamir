import React, { useEffect, useRef } from 'react';
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";

export const LiquidMetalCTA: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const shaderInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Colors from provided CSS
    // --bg-color: #1d1d1d
    // --light-color: #444
    // --dark-color: #000
    // --icon-color: #65615f

    try {
      shaderInstanceRef.current = new ShaderMount(
        mountRef.current,
        liquidMetalFragmentShader,
        {
          u_repetition: 1.5,
          u_softness: 0.5,
          u_shiftRed: 0.3,
          u_shiftBlue: 0.3,
          u_distortion: 0,
          u_contour: 0,
          u_angle: 100,
          u_scale: 1.5,
          u_shape: 1,
          u_offsetX: 0.1,
          u_offsetY: -0.1
        },
        undefined,
        0.6
      );
    } catch (e) {
      console.error("Failed to mount shader", e);
    }

    // Cleanup not explicitly provided by library API in snippet, 
    // but assuming standard React behavior we leave it or remove DOM if needed.
    // Since ShaderMount likely attaches a canvas, we rely on component unmount to clear DOM.
  }, []);

  // Converting 1rem = 10px from original design to pixels/tailwind
  // 38.5rem = 385px
  // 35rem = 350px
  // 39rem = 390px
  
  return (
    <div className="w-full flex justify-center md:justify-start">
      <div className="relative flex items-center justify-between md:justify-end gap-8 md:gap-32 p-8 md:p-12 bg-black rounded-[2.5rem] md:rounded-full w-full max-w-5xl shadow-[inset_0_0.2em_0_0_#444] overflow-hidden">
        
        {/* Abstract Icons Container */}
        <div className="flex gap-4 md:gap-12 items-center z-10">
            {/* Attachment Icon */}
            <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-12 h-12 md:w-[120px] md:h-[120px] fill-[#65615f] rotate-[70deg]" aria-hidden="true">
              <path d="M6.0678 2.16105C7.46414 1.61127 9.04215 2.29797 9.59221 3.69425L12.7983 11.8339C13.1238 12.6606 12.7177 13.5952 11.891 13.9208L11.8149 13.9511C10.9883 14.2765 10.0535 13.8695 9.72795 13.0429L8.02678 8.7255C7.92565 8.46868 8.05228 8.17836 8.30901 8.07706C8.56594 7.97586 8.85624 8.10236 8.95744 8.35929L10.6586 12.6767C10.7819 12.9894 11.1359 13.1436 11.4487 13.0204L11.5248 12.9901C11.8377 12.8669 11.9908 12.5129 11.8676 12.2001L8.66155 4.06046C8.31383 3.17839 7.31727 2.74467 6.43498 3.09171L6.28069 3.15226C5.39843 3.49996 4.96466 4.4974 5.31194 5.3798L9.18108 15.2011C9.75314 16.6533 11.3938 17.3667 12.8461 16.7948L13.0766 16.705C14.5288 16.1329 15.2432 14.4913 14.6713 13.039L12.308 7.03898C12.2069 6.78212 12.3325 6.49177 12.5893 6.39054C12.8461 6.28961 13.1365 6.41605 13.2377 6.67277L15.601 12.6728C16.3753 14.6389 15.4089 16.8601 13.4428 17.6347L13.2133 17.7255C11.2472 18.4998 9.025 17.5342 8.25041 15.5683L4.38225 5.74698C3.83217 4.35052 4.51801 2.77168 5.91448 2.22159L6.0678 2.16105Z">
              </path>
            </svg>

            {/* Sparkles Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" aria-hidden="true" className="w-12 h-12 md:w-[120px] md:h-[120px] fill-[#65615f] rotate-180">
              <path d="M14.217,19.707l-1.112,2.547c-0.427,0.979-1.782,0.979-2.21,0l-1.112-2.547c-0.99-2.267-2.771-4.071-4.993-5.057L1.73,13.292c-0.973-0.432-0.973-1.848,0-2.28l2.965-1.316C6.974,8.684,8.787,6.813,9.76,4.47l1.126-2.714c0.418-1.007,1.81-1.007,2.228,0L14.24,4.47c0.973,2.344,2.786,4.215,5.065,5.226l2.965,1.316c0.973,0.432,0.973,1.848,0,2.28l-3.061,1.359C16.988,15.637,15.206,17.441,14.217,19.707z">
              </path>
              <path d="M24.481,27.796l-0.339,0.777c-0.248,0.569-1.036,0.569-1.284,0l-0.339-0.777c-0.604-1.385-1.693-2.488-3.051-3.092l-1.044-0.464c-0.565-0.251-0.565-1.072,0-1.323l0.986-0.438c1.393-0.619,2.501-1.763,3.095-3.195l0.348-0.84c0.243-0.585,1.052-0.585,1.294,0l0.348,0.84c0.594,1.432,1.702,2.576,3.095,3.195l0.986,0.438c0.565,0.251,0.565,1.072,0,1.323l-1.044,0.464C26.174,25.308,25.085,26.411,24.481,27.796z">
              </path>
            </svg>
        </div>

        {/* Liquid Metal Button */}
        {/* Mobile: 250px, Desktop: 385px */}
        <div className="relative w-[250px] h-[250px] md:w-[385px] md:h-[385px] shrink-0">
          <div 
            ref={mountRef} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full shadow-[inset_0_0.2rem_0.2rem_0.2rem_rgba(255,255,255,0.3)] bg-gradient-to-b from-[#444] to-black"
          >
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[250px] h-[250px] md:w-[390px] md:h-[390px] rounded-full z-10 group cursor-pointer transition-all duration-300">
             {/* Gradient Border Effect */}
             <div className="absolute inset-0 p-2 rounded-full bg-[conic-gradient(from_180deg,blue,purple,red,purple,blue)] grayscale group-hover:grayscale-0 transition-all duration-300 mask-linear-xor"></div>
             
             {/* Icon inside button */}
             <svg className="w-[60px] md:w-[100px] fill-[#65615f] -rotate-45 relative z-20 pointer-events-none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M843.968 896a51.072 51.072 0 0 1-51.968-52.032V232H180.032A51.072 51.072 0 0 1 128 180.032c0-29.44 22.528-52.032 52.032-52.032h663.936c29.44 0 52.032 22.528 52.032 52.032v663.936c0 29.44-22.528 52.032-52.032 52.032z">
                </path>
                <path d="M180.032 896a49.92 49.92 0 0 1-36.48-15.616c-20.736-20.8-20.736-53.76 0-72.832L807.616 143.616c20.864-20.8 53.76-20.8 72.832 0 20.8 20.8 20.8 53.76 0 72.768L216.384 880.384a47.232 47.232 0 0 1-36.352 15.616z">
                </path>
              </svg>
          </div>
        </div>

      </div>
      
      {/* Mask style needed for the border effect */}
      <style>{`
        .mask-linear-xor {
           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
           -webkit-mask-composite: xor;
           mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
           mask-composite: exclude;
        }
      `}</style>
    </div>
  );
};