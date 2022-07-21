import { Helmet } from "react-helmet";

export default function MyClassroom() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>My Classroom</title>
      </Helmet>
      <div>My classroom page</div>
    </>
  );
}
