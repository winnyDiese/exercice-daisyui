import React from 'react'

const page = () => {
  return (
    <div className=' bg-base-200 '>
        <div className="hero bg-base-200 min-h-screen">
            <div className="max-w-5xl mx-auto hero-content flex-col lg:flex-row   gap-12">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto pb-20">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default page
