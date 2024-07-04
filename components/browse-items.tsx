// components/BrowseItems.tsx
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import Image from 'next/image';
import styles from './browse-items.module.css'; // Import CSS module

const BrowseItems: React.FC = () => {
  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Agents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center hover:shadow-md">
            <CardHeader>
              <CardTitle>Adam</CardTitle>
            </CardHeader>
            <CardContent className={`text-center ${styles.cardContent}`}>
              <div className={styles.agentImageContainer}>
                <Image className={styles.agentImage} alt="Adam" src="/agent-adam.jpg" width={200} height={200} layout="fixed" />
              </div>
              <p className="mt-4 text-sm font-semibold">Specializes in software engineering roles</p>
              <p className="mt-1 text-sm">5 years of industry experience</p>
              <p className="mt-1 text-sm">Success rate: 85%</p>
            </CardContent>
            <CardFooter>
              <Link href="/agents/adam" className={styles.connectLink}>
                Connect &rarr;
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col items-center hover:shadow-md">
            <CardHeader>
              <CardTitle>Jonas</CardTitle>
            </CardHeader>
            <CardContent className={`text-center ${styles.cardContent}`}>
              <div className={styles.agentImageContainer}>
                <Image className={styles.agentImage} alt="Jonas" src="/agent-jonas.jpg" width={200} height={200} layout="fixed" />
              </div>
              <p className="mt-4 text-sm font-semibold">Expert in data science positions</p>
              <p className="mt-1 text-sm">7 years of industry experience</p>
              <p className="mt-1 text-sm">Success rate: 90%</p>
            </CardContent>
            <CardFooter>
              <Link href="/agents/jonas" className={styles.connectLink}>
                Connect &rarr;
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col items-center hover:shadow-md">
            <CardHeader>
              <CardTitle>May</CardTitle>
            </CardHeader>
            <CardContent className={`text-center ${styles.cardContent}`}>
              <div className={styles.agentImageContainer}>
                <Image className={styles.agentImage} alt="May" src="/agent-may.jpg" width={200} height={200} layout="fixed" />
              </div>
              <p className="mt-4 text-sm font-semibold">Focuses on UX/UI design roles</p>
              <p className="mt-1 text-sm">6 years of industry experience</p>
              <p className="mt-1 text-sm">Success rate: 88%</p>
            </CardContent>
            <CardFooter>
              <Link href="/agents/may" className={styles.connectLink}>
                Connect &rarr;
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrowseItems;