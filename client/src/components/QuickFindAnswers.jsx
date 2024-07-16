import { FaUsers, FaInfoCircle, FaList, FaCheckCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuickFindAnswers = () => {
  return (
    <section className="max-w-[1140px] mx-auto h-[600px] mt-20">
    <div className="md:pt-0 pt-32">
    <h2 className="text-2xl font-semibold mb-2">
        Quick Find Answers
      </h2>
      <p className=" text-gray-500">
        Get answers to common questions about Eventify.
      </p>
    </div>
      <div className=" grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 pt-10 md:px-0 px-5">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-col items-center justify-center pb-3">
            <FaInfoCircle className="h-4 w-4" />
            <CardTitle className="text-sm font-medium text-center">
              What is Eventify?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xs text-muted-foreground">
              An event management platform for organizing and attending events.
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-col items-center justify-center pb-3">
            <FaList className="h-4 w-4" />
            <CardTitle className="text-sm font-medium text-center">
              What features does Eventify offer?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xs text-muted-foreground">
              Event creation, attendee registration, schedule management,
              real-time updates.
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-col items-center justify-center pb-3">
            <FaUsers className="h-4 w-4" />
            <CardTitle className="text-sm font-medium text-center">
              Who can use Eventify?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xs text-muted-foreground">
              Organizers, attendees, and event planners.
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-col items-center justify-center pb-3">
            <FaCheckCircle className="h-4 w-4" />
            <CardTitle className="text-sm font-medium text-center">
              How can Eventify benefit event organizers?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xs text-muted-foreground">
              Simplifies event management with automated tools.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickFindAnswers;
