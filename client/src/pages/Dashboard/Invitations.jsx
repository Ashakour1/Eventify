import React from "react";
import { ArrowUpRight } from "lucide-react";
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
import emailjs from 'emailjs-com';
import { toast } from "react-hot-toast";

// Initialize EmailJS
emailjs.init('x_gvnAKV-GAbfnznI'); // Replace with your EmailJS user ID (public key)

const Invitations = () => {
  const sendEmail = (email) => {
    const templateParams = {
      to_email: email,
      to_name: "Liam Johnson", // You can dynamically set this if needed
      from_name: "Your Company", // Replace with your company or dynamic value
      message: "This is a test message." // Customize your message here
    };

    emailjs.send(
      'service_7lxnoze', // Replace with your EmailJS service ID
      'template_3jj4elq', // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      toast.success('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email.', error);
      toast.error('Failed to send email.');
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
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Message</TableHead>
                <TableHead className="text-right">Event</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>

                <TableCell className="">
                  <Badge className="text-xs" variant="outline">
                    Approved
                  </Badge>
                </TableCell>

                <TableCell className="text-right">Message</TableCell>
                <TableCell className="text-right">Event</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" onClick={() => sendEmail("liam@example.com")}>
                    Send Email
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invitations;