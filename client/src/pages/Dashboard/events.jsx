import React, { useEffect, useState } from "react";
import axios from "axios";
import DHeader from "./DHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Dailog from "@/components/Dailog";
import { Link, useNavigate } from "react-router-dom";
const EventsAdmin = () => {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem("userData"));
        const token = userData?.token;

        // Set Authorization header if token exists
        const response = await axios.get("/api/events/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        setEvents(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const token = userData?.token;

        await axios.delete(`/api/events/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEvents(events.filter((event) => event.id !== id));
        alert("Event deleted successfully.");
      } catch (err) {
        console.error(err);
        alert("Failed to delete the event.");
      }
    }
  };

  return (
    <div className="p-6">
      <DHeader />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Events</h1>
            <p>You have {events.length} events </p>
          </div>
          <Link to="/admin/event/add">
            <Button>Create Event</Button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>title</TableHead>
                <TableHead>description</TableHead>
                <TableHead className="text-right">date</TableHead>
                <TableHead className="text-right">time</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell className="text-right">{event.date}</TableCell>
                  <TableCell className="text-right">{event.time}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/admin/event/edit/${event.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EventsAdmin;
