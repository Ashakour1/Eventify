import React from "react";
import { ArrowUpRight } from "lucide-react";

import { useUser } from "../../Hooks/useUser";
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
const Invitations = () => {
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
            <Link href="#">
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
                  <Button variant="outline" size="sm">
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
