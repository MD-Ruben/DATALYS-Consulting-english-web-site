"use client"

import React, { useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  location: string;
  type: "upcoming" | "past";
  price?: string;
  capacity?: number;
  speakers?: string[];
  agenda?: { time: string; activity: string }[];
};

const events: Event[] = [
  {
    id: "1",
    title: "AI Innovation Summit 2024",
    description: "Join us for an exciting discussion about the latest AI trends and their impact on business transformation.",
    date: "2024-06-15",
    image: "/images/events/event.jpg",
    location: "Paris, France",
    type: "upcoming",
    price: "Free",
    capacity: 200,
    speakers: ["Dr. Sarah Johnson", "Prof. Marc Dubois"],
    agenda: [
      { time: "09:00", activity: "Registration & Welcome Coffee" },
      { time: "09:30", activity: "Opening Keynote" },
      { time: "10:30", activity: "AI in Business Panel" },
    ]
  },
  {
    id: "2",
    title: "Data Analytics Workshop",
    description: "A hands-on workshop where we explored advanced data analytics techniques and real-world applications.",
    date: "2024-02-20",
    image: "/images/events/event.jpg",
    location: "Lyon, France",
    type: "past",
    speakers: ["Marie Laurent", "Thomas Bernard"],
  },
];

type RegistrationForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

const Events = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
  });

  const filteredEvents = events.filter(event => event.type === activeTab);

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter l'inscription
    console.log("Registration data:", formData);
    setShowRegistrationModal(false);
    // Réinitialiser le formulaire
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 mt-[45px] md:-mt-[105px]"> 
      <div className="container">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          {/* <div className="bottom-30 absolute hidden w-full px-4 md:block">
            <div className="mx-auto max-w-[700px]">
              <img
                src="/images/logo/logo.png"
                alt="about-image"
                className="h-full w-full opacity-10"
              />
            </div>
          </div> */}
          
          {/* Introduction text */}
          <p className="text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-lg">
            Dear partners and future partners of the DATALYS community, we are
            delighted to share with you the extraordinary moments we have
            experienced at our past events and our upcoming gatherings.
          </p>

          {/* Tab navigation */}
          <div className="flex justify-center space-x-4 mt-8 mb-12">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "upcoming"
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "past"
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-primary transition-all"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>

                  {/* Event details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </span>
                    </div>
                    
                    {event.price && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Price:</span> {event.price}
                      </div>
                    )}
                    
                    {event.capacity && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Capacity:</span> {event.capacity} attendees
                      </div>
                    )}

                    {event.speakers && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Speakers:</span>
                        <div className="ml-2">
                          {event.speakers.map((speaker, index) => (
                            <div key={index}>{speaker}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="text-primary hover:text-primary/80 text-sm underline"
                    >
                      View Details
                    </button>
                    
                    {event.type === "upcoming" && (
                      <button
                        onClick={() => {
                          setSelectedEvent(event);
                          setShowRegistrationModal(true);
                        }}
                        className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition-all"
                      >
                        Register Now
                      </button>
                    )}
                    
                    {event.type === "past" && (
                      <button className="inline-block bg-gray-600 text-gray-300 px-6 py-2 rounded-full cursor-not-allowed">
                        Event Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Event Details Modal */}
          {selectedEvent && !showRegistrationModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold text-white mb-4">{selectedEvent.title}</h2>
                
                {selectedEvent.agenda && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Agenda</h3>
                    <div className="space-y-2">
                      {selectedEvent.agenda.map((item, index) => (
                        <div key={index} className="flex gap-4 text-gray-300">
                          <span className="font-medium">{item.time}</span>
                          <span>{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Registration Modal */}
          {showRegistrationModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-white mb-4">Register for {selectedEvent?.title}</h2>
                
                <form onSubmit={handleRegistration} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Job Title</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-2 justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setShowRegistrationModal(false)}
                      className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/80"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Events;
