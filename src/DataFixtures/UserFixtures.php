<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    /**
     * @var UserPasswordHasherInterface
     */
    private $passwordHasher;

    /**
     * Summary of __construct
     * @param \Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface $passwordHasher
     */
    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    /**
     * Summary of load
     * @param \Doctrine\Persistence\ObjectManager $manager
     * @return void
     */
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime();
        // Admin
        $user = new User();
        $user->setEmail('admin@admin.fr')
            ->setPassword($this->passwordHasher->hashPassword($user, 'admin'))
            ->setRoles(['ROLE_ADMIN'])
            ->setCreateAt($date)
            ->setFirstName("Bert")
            ->setLastName("Admin")
            ->setIsBanned(false);
        $manager->persist($user);

        // Client
        $user = new User();
        $user->setEmail('client@client.fr')
            ->setPassword($this->passwordHasher->hashPassword($user, 'client'))
            ->setCreateAt($date)
            ->setFirstName("client")
            ->setLastName("testClient")
            ->setIsBanned(false);
        $manager->persist($user);
        $manager->flush();
        
    }
}
