<?php

namespace App\DataFixtures;

use App\Entity\Social;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SocialFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $socials = [
            'pinterest' => [
                'url' => 'https://www.pinterest.fr',
                'status' => true,
            ],
            'facebook' => [
                'url' => 'https://facebook.com',
                'status' => true,
            ],
            'instagram' => [
                'url' => 'https://www.instagram.com',
                'status' => true,
            ],
            'twitter' => [
                'url' => 'https://twitter.com',
                'status' => true,
            ],
            'google' => [
                'url' => 'https://google.fr',
                'status' => true,
            ],
            'airbnb' => [
                'url' => 'https://www.airbnb.fr',
                'status' => true,
            ],
            'booking' => [
                'url' => 'https://www.booking.com/',
                'status' => true,
            ],
            'tripadvisor' => [
                'url' => 'https://www.tripadvisor.fr/',
                'status' => true,
            ],
            'github' => [
                'url' => 'https://github.com/',
                'status' => true,
            ],
        ];

        foreach ($socials as $name => $option) {
            $entity = new Social();
            $entity->setName($name);
            $entity->setUrl($option['url']);
            $entity->setStatus($option['status']);
            $manager->persist($entity);
        }

        $manager->flush();
    }
}
