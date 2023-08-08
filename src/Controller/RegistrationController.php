<?php

namespace App\Controller;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Route;

class RegistrationController extends AbstractController
{
    #[Route('/api/users', name: 'api_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        $date = new \DateTime();
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setIsBanned(false);
            $user->setCreateAt($date);
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->json(['message' => 'Successfully registered'], Response::HTTP_CREATED);
        }

        return $this->json(['errors' => $form->getErrors(true, true)], Response::HTTP_BAD_REQUEST);
    }
}