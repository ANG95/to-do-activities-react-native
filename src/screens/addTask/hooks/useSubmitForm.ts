import { useContext, useState } from "react";
import { ActivitiesContext } from "../../../context/activitiesContext";
import { Routes } from "../../../navigation/routeNames";
import { Fetch } from "../../../services/api/apiHandler";
import { CURRENT_DATE, UuID } from "../../../utils/functions";

interface Facts {
  fact: String;
  length: number
}

export const UseSubmitForm = (url: string): [Function, boolean, []] => {
  const { saveActivities, tasks } = useContext(ActivitiesContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>()

  const fetchData = async (formData: string, navigate: (route: string) => void) => {
    setLoading(true);
    try {
      const { data } = await Fetch(`${url}${formData}`);
      const numerator = tasks.length + 1
      const newFormatTask = data.map((element: Facts, i: number) => {
        return {
          ...element,
          created: CURRENT_DATE,
          key: UuID()+(numerator + i).toString(),
          status: 'pending',
        }
      });
      saveActivities(newFormatTask)
      navigate(Routes.PendingTaskScreen)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, loading, error];
};