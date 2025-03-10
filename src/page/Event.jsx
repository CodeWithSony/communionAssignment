import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { useRef, Fragment } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

const EventPage = () => {
  const eventsData = [
    {
      id: 1,
      title: "Christmas Charity Drive",
      date: "Saturday, March 15, 2025",
      time: "5:30 AM IST",
      category: "Charity",
      image:
        "https://media.istockphoto.com/id/2188550789/photo/img_0253-christmas-tree-and-a-passing-train-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=RKWmEu_NheJHBoAqYnKJY45KM4CIKdVFZUm458Wur9E=",
    },
    {
      id: 2,
      title: "Eid-ul-Fitr",
      date: "Sunday, March 30, 2025",
      time: "5:30 AM IST",
      category: "Religious",
      image:
        "https://plus.unsplash.com/premium_photo-1691481673572-a3af5d7a1dfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWlkJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Mahavir Jayanti",
      date: "Thursday, April 10, 2025 - Saturday",
      time: "5:30 AM IST - 5:30 AM IST",
      category: "Religious",
      image:
        "https://plus.unsplash.com/premium_photo-1678593494435-9a9075496d10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYXZpciUyMGpheWFudGl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Good Friday Service",
      date: "Friday, April 18, 2025 - Saturday",
      time: "5:30 AM IST - 5:30 AM IST",
      category: "Religious",
      image:
        "https://images.unsplash.com/photo-1586529448754-87db980967f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29vZCUyMGZyaWRheXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Community Cleanup",
      date: "Saturday, May 5, 2025",
      time: "9:00 AM IST",
      category: "Social",
      image:
        "https://images.unsplash.com/photo-1586529448754-87db980967f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29vZCUyMGZyaWRheXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  const [events, setEvents] = useState(eventsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "",
  });
  const ledgerDialogRef = useRef();

  const showDialog = () => {
    ledgerDialogRef.current?.showModal();
  };
  const closeDialog = () => {
    ledgerDialogRef.current?.close();
  };
  const filterEvents = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setNewEvent({ title: "", date: "", category: "" });
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category) return;
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setShowForm(false);
    setNewEvent({ title: "", date: "", category: "" });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 z-0 relative">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg transition hover:bg-gray-800"
          onClick={showDialog}
        >
          Create Events
        </button>
      </header>

      {/* Category Filter Buttons */}
      <div className="flex space-x-4 my-4">
        {["All", "Religious", "Social", "Charity"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => filterEvents(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden p-4 border"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full object-cover rounded-md"
                style={{ height: "300px" }}
              />
              <div className="py-3">
                <span
                  className={`px-3 py-1 text-sm rounded-md ${
                    event.category === "Free"
                      ? "bg-green-200 text-green-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {event.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{event.title}</h2>
                <p className="text-gray-600">📅 {event.date}</p>
                <p className="text-gray-600">🕒 {event.time}</p>
                <span className="text-yellow-500">⭐</span>
                <a href="#" className="hover:underline">
                  Join others in this event
                </a>
                <button className="mt-3 flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition">
                  Event Details <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-4">
            No events found for "{selectedCategory}"
          </p>
        )}
      </div>

      <dialog
        ref={ledgerDialogRef}
        className="rounded-lg   shadow-lg bg-white relative  z-50 "
        onClose={closeDialog}
      >
        <div className="bg-white w-full rounded-lg  overflow-y-auto max-h-screen">
          <div className="flex justify-between items-center gap-x-10  ">
            <h1 className="font-bold leading-6 text-blue-800">Create Events</h1>
            <button
              onClick={closeDialog}
              className="text-gray-500 hover:text-gray-700"
            >
              <XCircleIcon
                className="h-8 w-8 text-red-500"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="border rounded-md">
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  className="p-2 border rounded-md"
                />
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="p-2 border rounded-md"
                />
                <select
                  name="category"
                  value={newEvent.category}
                  onChange={handleInputChange}
                  className="p-2 border rounded-md"
                >
                  <option value="">Select Category</option>
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddEvent}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Add Event
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EventPage;
