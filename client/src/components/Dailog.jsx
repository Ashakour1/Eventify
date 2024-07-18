import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import axios from "axios";

const DialogComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    eventType: "",
    link: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("date", formData.date);
    form.append("time", formData.time);
    form.append("location", formData.location);
    form.append("eventType", formData.eventType);
    form.append("link", formData.link);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      let response;
      response = await axios.post("/api/events/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data.message);
      toast.success(response.data.message);

      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        image: null,
        eventType: "",
        link: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Create Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new event.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <Label htmlFor="eventType">EventType</Label>
                <Input
                  id="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="link">link</Label>
                <Input
                  id="link"
                  value={formData.link}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="image">Image</Label>
              <Input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-4 w-[200px] h-[200px]"
                />
              )}
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
