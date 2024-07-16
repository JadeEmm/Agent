import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { JobApplicationModel } from '@/schemas/jobApplication';
import { SeekerProfileModel } from '@/schemas/seekerprofile';
import { OrderModel } from '@/schemas/order';

export async function GET(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const myAppliedJobs = await JobApplicationModel.find({ seekerid: session.user.id });
  const seekerProfiles = await SeekerProfileModel.find({ hostid: session.user.id });
  const existingOrders = await OrderModel.find({ seekerId: seekerProfiles[0]._id });

  return new Response(JSON.stringify({ myAppliedJobs, existingOrders }), {
    headers: { 'Content-Type': 'application/json' },
  });
}