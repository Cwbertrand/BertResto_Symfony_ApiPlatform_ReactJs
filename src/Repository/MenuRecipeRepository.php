<?php

namespace App\Repository;

use App\Entity\MenuRecipe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MenuRecipe>
 *
 * @method MenuRecipe|null find($id, $lockMode = null, $lockVersion = null)
 * @method MenuRecipe|null findOneBy(array $criteria, array $orderBy = null)
 * @method MenuRecipe[]    findAll()
 * @method MenuRecipe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MenuRecipeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MenuRecipe::class);
    }

//    /**
//     * @return MenuRecipe[] Returns an array of MenuRecipe objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MenuRecipe
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
