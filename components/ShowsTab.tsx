import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import getDaysOfWeek from '@/helpers/getDaysOfWeek';

export default function ShowsTab() {
  const upcommingDays = getDaysOfWeek();

  return (
    <Tabs defaultValue={upcommingDays[0].currentDay} className="w-[400px]">
      <TabsList className="">
        {upcommingDays.map((day) => (
          <TabsTrigger
            value={day.currentDay}
            key={day.currentDate}
            className="w-fit"
          >
            <div className="grid grid-cols-1 font-bold">
              <p>{day.currentDay}</p>
              <p>{day.currentDate}</p>
              <p>{day.currentMonth}</p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      {upcommingDays.map((day) => (
        <TabsContent value={day.currentDay} key={day.currentDate}>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
        </TabsContent>
      ))}
    </Tabs>
  );
}
