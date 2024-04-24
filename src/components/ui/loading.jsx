function LoadingWorkSpace (){
    return (
      <div className=" col-span-12 md:pr-3 grid grid-cols-1 gap-3 mt-20 md:py-5 md:m-0 md:col-span-10 md:grid-cols-12 md:grid-rows-2 md:row-span-2 animate-pulse">
        <div
          role="status"
          className=" flex flex-col border-surface  border-2 rounded-custom md:col-span-12 p-2 h-[30vh] md:h-auto gap-5"
        >
          <div className="flex flex-row justify-between   border-b-2 pb-2 border-surface">
            <div className="flex items-center gap-2 text-primary-dark">
              <div className=" h-8 w-8 rounded-custom  bg-surface"></div>
              <div className=" h-3 w-20 bg-surface rounded-custom"></div>
            </div>
            <div className=" w-20 h-8 bg-surface rounded-custom inline-block"></div>
          </div>

          {/* svg */}
          <div className=" flex-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_2"
              data-name="Layer 2"
              viewBox="0 0 314.33 281.48"
              height="8rem"
            >
              <defs>
                <style>
                  {
                    ".cls-2,.cls-3,.cls-4,.cls-5{stroke-width:0}.cls-2{fill:#545454}.cls-3{fill:#f7f7f7}.cls-4{fill:#d1d3d4}.cls-5{fill:#f2f2f3}"
                  }
                </style>
              </defs>
              <g id="main_car" data-name="main car">
                <path
                  d="M32.67 126.78c-5.39-21.06 22.04-41.24 47.18-29.68 11.55 5.32 19.12 18.3 16.5 29.28h131.07c-5.49-23.8 26.7-42 50.89-27.3 9.87 5.99 14.91 16.82 12.78 26.91.52 1.2 16.99.98 17.89.79 4.22-.88 5.37-15.55 5.35-19.19-.05-6.6-1.64-2.47-3.72-3.96-1.46-1.04-3.62-17.83-23.47-23.94-13.91-4.28-51.79-.54-56.24-1.98-.59-.19-4.63-7.32-6.27-9.3-39.7-47.62-117.29-48.27-159.42-7.91-8.81 8.43-13.02 16.84-14.18 17.21-8.29 2.68-31.78-8.44-42.99 15.63-3.73 8-.28 10.64-7.9 10.68.87 4.3-.48 21.63 5.35 22.75 3.02.58 21-.43 27.19 0Z"
                  className="cls-2"
                />
                <path
                  d="M150.03 91.96c-7.59.13-1.01 6.27 1.63 1.38l-1.63-1.38Z"
                  className="cls-3"
                />
                <g id="llanta">
                  <path
                    d="M227.42 126.39c1.35 5.84 7.45 13.55 13.25 17.02 19.25 11.51 46.27 2.29 50.43-17.41 2.13-10.08-2.91-20.91-12.78-26.91-24.2-14.69-56.39 3.51-50.89 27.3Z"
                    className="cls-3"
                  />
                  <path
                    d="M263.9 96.71c-33.81-3.45-45.67 33.11-19.52 45.9 21.2 10.37 48.78-4.15 43.46-27.11-2.08-8.95-13.35-17.72-23.94-18.8Z"
                    className="cls-2"
                  />
                  <path
                    d="M261.58 105.41c-26.99-2.06-28.01 31.21-3.25 32.45 24.49 1.23 26.63-30.66 3.25-32.45Z"
                    className="cls-5"
                  />
                  <path
                    d="M254.37 106.6c-4.2.84-9.12 4.24-11.15 7.52 3.37-.51 4.25 3.15 5.11 5.34-11.57 1.5-1.91.46-1.39 3.96.11.74-2.52 5.82-4.18 4.55.39.74.87 1.32 1.39 1.98.37-.79 8.33-3.17 9.06-2.37.62.67-.74 8.07-2.56 7.52 1.16.56 3.38 1.35 4.65 1.58-7.43-6.25 6.45-8.16 4.18-.59 3.95 1.32 1.86-2.55 1.86-7.12 3.85-1.35-1.14 3.09 1.86 7.72 4.99-.88 7.87-2.86 10.69-6.33 3.33-3.96-2.43-5.76-3.72-9.5-.4-1.15 0-.75 0-.79-.04-3.56 3.16-4.91 2.79-8.31-2.73-2.75-6.3-5.04-10.69-5.54 2.51 2.78-6.8 10.68-7.9.4Z"
                    className="cls-2"
                  />
                  <path
                    d="M243.22 114.12c-2.95 4.76-3.04 8.97-.46 13.85 1.66 1.27 4.29-3.81 4.18-4.55-.52-3.5-10.17-2.46 1.39-3.96-.87-2.19-1.74-5.85-5.11-5.34ZM244.15 129.95c1.24 1.57 4.55 4.2 6.51 5.14 1.82.56 3.17-6.85 2.56-7.52-.73-.79-8.69 1.59-9.06 2.37Z"
                    className="cls-2"
                  />
                  <path
                    d="M255.3 136.68c2.97.55 4.97.52 7.9 0-3-4.63 1.99-9.07-1.86-7.72 0 4.57 2.09 8.44-1.86 7.12 2.27-7.57-11.61-5.65-4.18.59ZM254.37 106.6c1.1 10.28 10.41 2.38 7.9-.4-2.07-.24-5.8-.02-7.9.4ZM270.18 120.06c2.71-.33 6.16.96 6.97-1.19-.73-3.64-1.59-4.51-4.18-7.12.37 3.4-2.82 4.75-2.79 8.31Z"
                    className="cls-2"
                  />
                  <path
                    d="M270.18 120.85c1.29 3.74 7.05 5.54 3.72 9.5 2.37-2.91 2.62-2.88 3.25-6.73-.31-4.4-2.17-3.44-6.97-2.77Z"
                    className="cls-2"
                  />
                  <path
                    d="M270.18 120.06s-.4-.36 0 .79c4.8-.67 6.66-1.63 6.97 2.77.27-1.66.33-3.09 0-4.75-.81 2.14-4.26.86-6.97 1.19Z"
                    style={{
                      strokeWidth: 0,
                      fill: "#6f6f6f",
                    }}
                  />
                </g>
                <g id="llanta-2" data-name="llanta">
                  <path
                    d="M32.67 126.78c.14.54 4.7 8.99 5.58 10.09 12.46 15.66 41.3 15.25 52.99-.79.67-.92 4.99-9.17 5.11-9.69 2.62-10.98-4.94-23.97-16.5-29.28-25.14-11.57-52.56 8.61-47.18 29.68Z"
                    className="cls-3"
                  />
                  <path
                    d="M69.16 96.71c-27.97-2.85-42.99 23.08-27.65 39.77 18.62 20.26 58.93 5.47 51.13-21.76-2.46-8.58-13.14-16.95-23.47-18Z"
                    className="cls-2"
                  />
                  <path
                    d="M67.76 105.41c-27-3.16-28.77 29.46-6.51 32.05 26.78 3.11 28.65-29.46 6.51-32.05Z"
                    className="cls-5"
                  />
                  <path
                    d="m49.87 112.14 4.65 7.32c-9.79 1.93 3.01 2.14-6.04 8.9.91 1.7 1.33 1.5 1.39 1.58 8.64-3.41 10.86-4.65 6.74 4.35h-1.63c.32.18 1.23 1.3 4.18 1.98-.47-1.61-2.85-2.9-.23-3.96 2.01 3.11.91-3.28 4.88-.99 3.57 8.69 4.13 4.73 2.79-3.17 4.9-2.58 6.55 2.11 9.76 4.35l-.93.99c5.74-3.78 6.75-6.44 6.51-12.27-8.18.45-3.13-3.77-2.32-7.91-.68-.97-1.33-1.12-1.39-1.19-5.01.94-7.69-.22-6.51-4.75-7.65-2.64-16.96-1.27-21.85 4.75Z"
                    className="cls-2"
                  />
                  <path
                    d="M59.16 136.28c6.51 1.51 11.15.6 16.27-2.77l.93-.99c-3.21-2.24-4.86-6.93-9.76-4.35 1.35 7.9.78 11.86-2.79 3.17-3.97-2.29-2.87 4.1-4.88.99-2.62 1.06-.24 2.35.23 3.96ZM48.47 128.37c9.05-6.76-3.75-6.97 6.04-8.9l-4.65-7.32c-4.08 5.03-4.32 10.78-1.39 16.22ZM49.87 129.95c1.73 2.21 2.47 2.9 5.11 4.35h1.63c4.13-9.01 1.9-7.76-6.74-4.35ZM81.94 121.24c-.15-3.72.66-3.68-2.32-7.91-.8 4.15-5.85 8.37 2.32 7.91ZM78.22 112.14c-1.98-2.09-3.38-3.67-6.51-4.75-1.18 4.52 1.5 5.69 6.51 4.75Z"
                    className="cls-2"
                  />
                </g>
              </g>
              <g id="under_car" data-name="under car">
                <path
                  d="M281.5 185.24c5.55 21.02-21.71 41.42-46.94 30.05-11.6-5.23-19.27-18.15-16.73-29.15q-65.53.51-131.07 1.03c5.68 23.75-26.36 42.21-50.68 27.7-9.92-5.92-15.05-16.71-12.99-26.81-.53-1.19-17-.85-17.9-.65C.98 188.32-.05 203 0 206.64c.1 6.6 1.66 2.46 3.75 3.93 1.47 1.03 3.76 17.8 23.66 23.76 13.94 4.17 51.79.13 56.25 1.54.59.19 4.68 7.29 6.35 9.25 40.07 47.3 117.67 47.34 159.48 6.66 8.74-8.5 12.89-16.94 14.04-17.32 8.26-2.74 31.85 8.19 42.87-15.97 3.66-8.03.19-10.65 7.82-10.75-.9-4.3.31-21.63-5.52-22.71-3.03-.56-20.99.6-27.19.21Z"
                  className="cls-4"
                />
                <path
                  d="M164.42 220.98c7.59-.19.96-6.28-1.64-1.37l1.64 1.37Z"
                  className="cls-4"
                />
                <g id="llanta-3" data-name="llanta">
                  <path
                    d="M86.77 187.16c-1.39-5.83-7.56-13.49-13.38-16.91-19.34-11.36-46.28-1.92-50.29 17.81-2.05 10.1 3.07 20.89 12.99 26.81 24.31 14.5 56.36-3.95 50.68-27.7Z"
                    className="cls-4"
                  />
                  <path
                    d="M50.52 217.13c33.84 3.18 45.4-33.47 19.16-46.05-21.28-10.2-48.75 4.54-43.24 27.45 2.15 8.93 13.49 17.61 24.08 18.61Z"
                    className="cls-4"
                  />
                  <path
                    d="M52.77 208.4c27.01 1.85 27.76-31.43 3-32.47-24.49-1.03-26.39 30.87-3 32.47Z"
                    className="cls-4"
                  />
                  <path
                    d="M59.97 207.16c4.19-.87 9.09-4.31 11.1-7.61-3.36.53-4.27-3.11-5.15-5.3 11.55-1.59 1.91-.47 1.36-3.97-.12-.74 2.47-5.84 4.15-4.58-.39-.73-.88-1.31-1.41-1.97-.37.79-8.31 3.23-9.04 2.45-.62-.67.67-8.08 2.5-7.54-1.16-.55-3.39-1.32-4.66-1.55 7.47 6.19-6.38 8.21-4.18.63-3.96-1.29-1.84 2.57-1.8 7.14-3.84 1.38 1.11-3.1-1.92-7.7-4.98.92-7.85 2.93-10.64 6.42-3.3 3.99 2.47 5.74 3.79 9.47.41 1.15 0 .75 0 .79.06 3.56-3.12 4.94-2.72 8.33 2.75 2.73 6.34 4.99 10.73 5.46-2.53-2.76 6.72-10.73 7.9-.46Z"
                    className="cls-4"
                  />
                  <path
                    d="M71.06 199.55c2.91-4.79 2.97-9 .36-13.85-1.67-1.26-4.26 3.84-4.15 4.58.55 3.49 10.19 2.38-1.36 3.97.88 2.19 1.79 5.83 5.15 5.3ZM70.01 183.73c-1.25-1.56-4.58-4.17-6.55-5.09-1.82-.54-3.12 6.87-2.5 7.54.74.79 8.68-1.65 9.04-2.45Z"
                    className="cls-4"
                  />
                  <path
                    d="M58.8 177.09c-2.97-.53-4.98-.48-7.9.06 3.03 4.6-1.92 9.08 1.92 7.7-.03-4.57-2.16-8.42 1.8-7.14-2.21 7.59 11.65 5.56 4.18-.63ZM59.97 207.16c-1.18-10.27-10.43-2.3-7.9.46 2.07.22 5.8-.02 7.9-.46ZM44.06 193.83c-2.71.35-6.17-.91-6.96 1.24.76 3.63 1.63 4.49 4.24 7.09-.4-3.39 2.79-4.77 2.72-8.33Z"
                    className="cls-4"
                  />
                  <path
                    d="M44.05 193.04c-1.32-3.73-7.09-5.48-3.79-9.47-2.35 2.93-2.6 2.9-3.2 6.75.34 4.4 2.2 3.42 6.99 2.72Z"
                    className="cls-4"
                  />
                  <path
                    d="M44.06 193.83s.4.35 0-.79c-4.79.71-6.65 1.68-6.99-2.72-.26 1.66-.31 3.09.04 4.75.79-2.15 4.26-.9 6.96-1.24Z"
                    className="cls-4"
                  />
                </g>
                <g id="llanta-4" data-name="llanta">
                  <path
                    d="M281.5 185.24c-.14-.54-4.77-8.95-5.66-10.05-12.58-15.57-41.42-14.93-52.98 1.21-.67.93-4.92 9.21-5.04 9.73-2.54 11 5.13 23.93 16.73 29.15 25.23 11.37 52.49-9.03 46.94-30.05Z"
                    className="cls-4"
                  />
                  <path
                    d="M245.26 215.6c27.99 2.63 42.8-23.42 27.34-39.98-18.78-20.12-58.97-5.01-50.95 22.17 2.52 8.56 13.27 16.85 23.61 17.82Z"
                    className="cls-4"
                  />
                  <path
                    d="M246.58 206.88c27.03 2.95 28.54-29.69 6.25-32.1-26.8-2.9-28.42 29.69-6.25 32.1Z"
                    className="cls-4"
                  />
                  <path
                    d="m264.42 200.01-4.71-7.28c9.78-2.01-3.03-2.12 5.97-8.95-.93-1.7-1.34-1.49-1.41-1.57-8.61 3.48-10.83 4.74-6.77-4.3h1.63c-.32-.19-1.24-1.3-4.2-1.96.48 1.61 2.88 2.88.26 3.96-2.03-3.09-.89 3.28-4.87 1.03-3.64-8.66-4.17-4.7-2.76 3.19-4.88 2.62-6.56-2.06-9.79-4.28l.92-1c-5.71 3.83-6.7 6.49-6.41 12.32 8.17-.52 3.15 3.74 2.39 7.9.69.97 1.34 1.11 1.4 1.18 5-.98 7.69.16 6.54 4.7 7.67 2.58 16.96 1.14 21.81-4.92Z"
                    className="cls-4"
                  />
                  <path
                    d="M254.94 175.95c-6.53-1.46-11.15-.51-16.25 2.9l-.92 1c3.23 2.22 4.92 6.89 9.79 4.28-1.41-7.89-.87-11.85 2.76-3.19 3.98 2.26 2.84-4.12 4.87-1.03 2.61-1.08.22-2.35-.26-3.96ZM265.69 183.78c-9 6.83 3.81 6.94-5.97 8.95l4.71 7.28c4.04-5.06 4.23-10.82 1.27-16.23ZM264.28 182.21c-1.74-2.2-2.5-2.88-5.15-4.31h-1.63c-4.05 9.05-1.84 7.79 6.77 4.31ZM232.28 191.16c.18 3.72-.63 3.69 2.39 7.9.77-4.15 5.79-8.41-2.39-7.9ZM236.07 200.24c1.99 2.08 3.41 3.64 6.54 4.7 1.15-4.53-1.54-5.68-6.54-4.7Z"
                    className="cls-4"
                  />
                </g>
              </g>
            </svg>
          </div>
          {/* svg */}
        </div>
        {/* Calendar  */}
        <div
          role="status"
          className=" border-surface  border-2 rounded-custom  md:col-span-6 p-2 h-[30vh]  md:h-auto flex flex-col gap-2 overflow-scroll"
        >
          <div className="flex flex-row justify-between   border-b-2 pb-2 border-surface ">
            <div className="flex items-center gap-2 text-primary-dark">
              <div className=" h-8 w-8 rounded-custom  bg-surface"></div>
              <div className=" h-3 w-20 bg-surface rounded-custom"></div>
            </div>
            <div className=" w-20 h-8 bg-surface rounded-custom inline-block"></div>
          </div>
          <div className=" bg-surface h-20 rounded-custom flex items-center justify-between py-4 px-2">
            <div className=" bg-white h-10 w-10 rounded-full"></div>
            <div className=" flex gap-2">
              <div className=" bg-white h-12 w-10"></div>
              <div className=" bg-white h-12 w-10 "></div>
              <div className=" bg-white h-12 w-10 "></div>
            </div>
            <div className=" bg-white h-10 w-10 rounded-full"></div>
          </div>
          <div className=" bg-surface h-1 rounded-custom"></div>
          <div className=" h-4 w-20 bg-surface rounded-custom"></div>
          <div className=" flex gap-4 py-4 px-2 border-2  border-surface rounded-custom">
            <div className=" h-6 w-6 bg-surface rounded-custom "></div>
            <div className=" flex flex-col gap-2">
              <div className=" h-2 w-12 bg-surface rounded-custom "></div>
              <div className=" h-2 w-20 bg-surface rounded-custom "></div>
            </div>
          </div>
        </div>
        {/* Items List  */}
        <div
          role="status"
          className=" border-surface  border-2 rounded-custom md:col-span-6 p-2 flex flex-col gap-2 overflow-scroll"
        >
          <div className="flex flex-row justify-between   border-b-2 pb-2 border-surface">
            <div className="flex items-center gap-2 text-primary-dark">
              <div className=" h-8 w-8 rounded-custom  bg-surface"></div>
              <div className=" h-3 w-20 bg-surface rounded-custom"></div>
            </div>
            <div className=" w-20 h-8 bg-surface rounded-custom inline-block"></div>
          </div>
          <div className=" flex gap-4 py-4 px-2 border-2  border-surface rounded-custom">
            <div className=" h-6 w-6 bg-surface rounded-custom "></div>
            <div className=" flex flex-col gap-2">
              <div className=" h-2 w-12 bg-surface rounded-custom "></div>
              <div className=" h-2 w-20 bg-surface rounded-custom "></div>
            </div>
          </div>
          <div className=" flex gap-4 py-4 px-2 border-2  border-surface rounded-custom">
            <div className=" h-6 w-6 bg-surface rounded-custom "></div>
            <div className=" flex flex-col gap-2">
              <div className=" h-2 w-12 bg-surface rounded-custom "></div>
              <div className=" h-2 w-20 bg-surface rounded-custom "></div>
            </div>
          </div>
          <div className=" flex gap-4 py-4 px-2 border-2  border-surface rounded-custom">
            <div className=" h-6 w-6 bg-surface rounded-custom "></div>
            <div className=" flex flex-col gap-2">
              <div className=" h-2 w-12 bg-surface rounded-custom "></div>
              <div className=" h-2 w-20 bg-surface rounded-custom "></div>
            </div>
          </div>
          <div className=" flex gap-4 py-4 px-2 border-2  border-surface rounded-custom">
            <div className=" h-6 w-6 bg-surface rounded-custom "></div>
            <div className=" flex flex-col gap-2">
              <div className=" h-2 w-12 bg-surface rounded-custom "></div>
              <div className=" h-2 w-20 bg-surface rounded-custom "></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoadingWorkSpace;