import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import DHeader from "./DHeader";
import axios from "axios";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Invitations = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get("/api/participants/");
        setParticipants(response.data.data);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    fetchParticipants();
  }, []);

  const sendEmail = (participant) => {
    const templateParams = {
      to_email: participant.email,
      to_name: participant.name,
      from_name: "Eventify", // Replace with your company or dynamic value
      message: `Hello ${participant.name}, this is your invitation message.`,
    };

    emailjs
      .send(
        "service_6ccwlak",
        "template_via7s5b",
        templateParams,
        "46aiqSBPHs4x5ZgB1"
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
    <div>
      <DHeader />
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Invitations</CardTitle>
            <CardDescription>
              Recent Invitations from Our Website.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link to="#">
              View All
              <FaArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Message</TableHead>
                <TableHead className="text-right">Event</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {participants.map((participant) => (
                <TableRow key={participant.id}>
                  <TableCell>
                    <div className="font-medium">{participant.name}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {participant.email}
                    </div>
                  </TableCell>
                  <TableCell className="">
                    <Badge className="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {participant.message}
                  </TableCell>
                  <TableCell className="text-right">
                    {participant.event}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => sendEmail(participant)}
                    >
                      Send Email
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invitations;
