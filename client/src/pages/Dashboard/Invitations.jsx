import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DHeader from "./DHeader";
import axios from "axios";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";

const Invitations = () => {
  const [participants, setParticipants] = useState([]);
  const [events, setEvents] = useState([]); // State to store event data
  const [editing, setEditing] = useState(null); // To track which participant is being edited
  const [status, setStatus] = useState(""); // For status input

  // Fetch events and participants
  useEffect(() => {
    const fetchParticipantsAndEvents = async () => {
      try {
        // Fetch participants
        const participantsResponse = await axios.get("/api/participants/");
        setParticipants(participantsResponse.data.data);

        // Fetch events
        const eventsResponse = await axios.get("/api/events/");
        setEvents(eventsResponse.data.data); // Assuming /api/events returns event data
      } catch (error) {
        console.error("Error fetching participants or events:", error);
      }
    };

    fetchParticipantsAndEvents();
  }, []);

  // Function to get event name by ID
  const getEventNameById = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    return event ? event.title : "Event Not Found"; // Return "Event Not Found" if the event doesn't exist
  };

  // Update participant status
  const updateStatus = async (participant) => {
    try {
      const response = await axios.put(`/api/participants/${participant.id}`, {
        status,
      });

      // Update the local state immediately
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === participant.id
            ? { ...p, status: response.data.data.status }
            : p
        )
      );

      setEditing(null);
      toast.success("Status updated successfully!");
    } catch (error) {
      console.error("Failed to update status.", error);
      toast.error("Failed to update status.");
    }
  };

  const sendEmail = (participant) => {
    const templateParams = {
      to_email: participant.email,
      to_name: participant.name,
      from_name: "Eventify", // Replace with your company or dynamic value
      message: `Hello ${participant.name} from Eventify! We are glad to invite you to our ${participant.event} event. if you have any queries, please feel free to contact us., // Replace with your message`,
    };

    emailjs
      .send(
        "service_g3j76qr",
        "template_aa7eai7",
        templateParams,
        "ep3XQ79vKjCRzZeto"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        toast.error("Failed to send email.");
      });
  };

  const cancelInvite = (participant) => {
    const templateParams = {
      to_email: participant.email,
      to_name: participant.name,
      from_name: "Eventify", // Replace with your company or dynamic value
      message: `Hello ${participant.name} from Eventify! We are sorry to inform you that your invitation to our ${participant.event} event has been cancelled. if you have any queries, please feel free to contact us., // Replace with your message`,
    };

    emailjs
      .send(
        "service_g3j76qr",
        "template_aa7eai7",
        templateParams,
        "ep3XQ79vKjCRzZeto"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        toast.error("Failed to send email.");
      });
  };

  return (
    <div className="p-6">
      <DHeader />
      <div className="container mx-auto p-6 xl:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Participants Invitations</h1>
        <p>You have {participants.length} invitations for </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((participant) => (
              <TableRow key={participant.id}>
                <TableCell>{participant.name}</TableCell>
                <TableCell>{participant.email}</TableCell>
                <TableCell>
                  {getEventNameById(participant.eventId)}
                </TableCell>{" "}
                {/* Show event name */}
                <TableCell>
                  {editing === participant.id ? (
                    <select
                      name="event"
                      id="event"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  ) : (
                    participant.status
                  )}
                </TableCell>
                <TableCell>
                  {editing === participant.id ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(participant)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditing(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditing(participant.id);
                          setStatus(participant.status);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => sendEmail(participant)}
                      >
                        Send Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => cancelInvite(participant)}
                      >
                        Cancel invite
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Invitations;
