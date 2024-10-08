import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const CtaCard = ({icon, title, description}) => {
  return (
    <Card className="mt-3 h-60 w-40 md:w-80 bg-gray-100 p-2 shadow-md shadow-gray-600 transition transform hover:scale-x-95">
      <CardBody>
        <div className="mb-4 h-10 w-10 text-[rgba(4,72,108,0.94)] mx-auto">
          {icon}
        </div>
        <Typography
          className="mb-2 text-xl text-center md:text-2xl text-gray-800 font-bold"
        >
          {title}
        </Typography>
        <Typography className="text-[16px] text-gray-600 text-center">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default CtaCard ;