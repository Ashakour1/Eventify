import { FaUsers, FaInfoCircle, FaList, FaCheckCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuickFindAnswers = () => {
  return (
    <section>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
